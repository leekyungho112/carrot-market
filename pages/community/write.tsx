import { NextPage } from 'next';
import Button from '../../components/button';
import Layout from '../../components/layout';
import Textarea from '../../components/textarea';

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      {' '}
      <form className="px-4 space-y-4">
        <Textarea
          label="Post"
          name="post"
          required
          placeholder="Ask a question!"
        />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
