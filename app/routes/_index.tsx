import Layout from '~/Layout/Layout';
import Start from '~/Sections/Home/StartHome/Start';
import Projects from '~/Sections/Home/Projects/Projects';
export default function Home(){
    return (
            <Layout>
              <Start/>
              <Projects/>
            </Layout>
    );
};
