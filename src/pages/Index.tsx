import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Layout>
        <Hero />
        {/* SEO keywords for Google ranking */}
        <div style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}} aria-hidden="true">
          Praveen Kumar, Machine Learning, Full Stack Development, Data Science, Cloud Computing, TensorFlow, React, Node.js, Python, neural networks, time-series, portfolio, research, web development, mobile responsive, SEO, Open Graph, Twitter cards, certifications, internships, CGPA, SVU, media in-charge, intelligent solutions, AI-powered applications, methane detection, SP Kabaddi, DDKA, IIT ISM Dhanbad, IIT BHU
        </div>
      </Layout>
    </div>
  );
};

export default Index;
