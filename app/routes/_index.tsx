import Layout from '~/Layout/Layout';
import Start from '~/Sections/Home/StartHome/Start';
import Projects from '~/Sections/Home/Projects/Projects';
import About from '~/Sections/Home/About/About';
import Skills from '~/Sections/Skills/Skills';

export default function Home() {
  return (
    <Layout>
      <Start />
      <About />
      <Projects />
      <Skills />
    </Layout>
  );
};
