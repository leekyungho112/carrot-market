import { NextPage } from 'next';
import Layout from '@components/layout';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect } from 'react';
import { Answer, Post, User } from '@prisma/client';
import Link from 'next/link';
import useMutation from '@libs/client/useMutation';
import { cls } from '@libs/client/utils';
import Textarea from '@components/textarea';
import { useForm } from 'react-hook-form';

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    wondering: number;
  };
  answers: AnswerWithUser[];
}
interface CommunityPostResponse {
  ok: boolean;
  post: PostWithUser;
  isWondering: boolean;
}

interface AnswerForm {
  answer: string;
}
interface AnswerResponse {
  ok: boolean;
  answer: Answer;
}

const CommunityPostDetail: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const { data, mutate } = useSWR<CommunityPostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [wonder, { loading }] = useMutation(
    `/api/posts/${router.query.id}/wonder`
  );
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answers`);
  const onWonderClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data?.post,
          _count: {
            ...data.post._count,
            wondering: data.isWondering
              ? data?.post._count.wondering - 1
              : data?.post._count.wondering + 1,
          },
        },
        isWondering: !data.isWondering,
      },
      false
    );
    if (!loading) {
      wonder({});
    }
  };
  useEffect(() => {
    if (!data?.post) {
      router.push('/community');
    }
  }, [data, router]);

  const onValid = (form: AnswerForm) => {
    if (answerLoading) return;
    sendAnswer(form);
  };
  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);
  return (
    <Layout canGoBack>
      <div>
        <span className="inline-flex my-2.5 ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-900">
          ????????????
        </span>
        <div className="flex mb-3 px-4 cursor-pointer py-3  border-b items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {data?.post?.user.name}
            </p>
            <Link href={`/users/profile/${data?.post?.user.id}`}>
              <a className="text-xs font-semibold text-gray-500">
                View profile &rarr;
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className="mt-2 ml-4 text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span>
            {data?.post?.question}
          </div>
          <div className="flex  space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1.5px] w-full">
            <button
              onClick={onWonderClick}
              className={cls(
                'flex ml-4 space-x-2 items-center text-xs',
                data?.isWondering ? 'text-teal-400' : ''
              )}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>???????????? {data?.post._count.wondering}</span>
            </button>
            <span className="flex space-x-2 items-center text-xs">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>?????? {data?.post._count.answers}</span>
            </span>
          </div>
          <div className="px-4 my-5 space-y-5">
            {data?.post.answers.map((answer) => (
              <div key={answer.id} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-300 rounded-full" />
                <div>
                  <span className="text-sm block font-medium text-gray-700">
                    {answer.user.name}
                  </span>
                  <span className="text-xs text-gray-500 block">
                    {answer.createdAt}
                  </span>
                  <p className="text-gray-700 mt-2">{answer.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="px-4" onSubmit={handleSubmit(onValid)}>
            <Textarea
              className="mt-1 shadow-sm w-full  focus:ring-orange-500  rounded-md border-gray-300 focus:border-orange-500"
              rows={4}
              placeholder="Answer this question!"
              register={register('answer', { required: true, minLength: 5 })}
            />
            <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-500">
              {answerLoading ? 'Loading...' : 'Reply'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
