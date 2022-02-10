import { NextPage } from 'next';
import Button from '../../components/button';
import Input from '../../components/input';
import Layout from '../../components/layout';
import Textarea from '../../components/textarea';

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className="py-10 space-y-4 px-4">
        <Input label="Name" required name="name" type="text" />
        <Input
          label="Price"
          required
          name="price"
          type="text"
          placeholder="0.00"
          kind="price"
        />
        <Textarea name="description" label="Description" />

        <Button text="Go Live" />
      </form>
    </Layout>
  );
};

export default Create;
