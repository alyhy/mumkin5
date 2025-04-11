import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page = ({ title, content }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center bg-primary min-h-screen">
    <h1 className="text-4xl font-bold text-accent mb-4">{title}</h1>
    <p className="text-lg text-[#333]">{content}</p>
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <div className="text-center p-4 bg-support text-white">
        <nav className="space-x-4 rtl:space-x-reverse">
          <Link to="/">الرئيسية</Link>
          <Link to="/about">من نحن</Link>
          <Link to="/services">الخدمات</Link>
          <Link to="/works">أعمالنا</Link>
          <Link to="/achievements">الإنجازات</Link>
          <Link to="/register">سجل الآن</Link>
          <Link to="/contact">تواصل معنا</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Page title="فريق ممكن" content="تحدي الحاضر، صُنّاع المستقبل" />} />
        <Route path="/about" element={<Page title="من نحن" content="الرؤية، الرسالة، الأهداف" />} />
        <Route path="/services" element={<Page title="الخدمات" content="ورش، مسابقات، دورات" />} />
        <Route path="/works" element={<Page title="أعمالنا" content="ورش ومشاريع الفريق السابقة" />} />
        <Route path="/achievements" element={<Page title="الإنجازات" content="مشاركات، جوائز، إحصائيات" />} />
        <Route path="/register" element={<Page title="سجل الآن" content="نموذج تسجيل الطلاب والمتطوعين" />} />
        <Route path="/contact" element={<Page title="تواصل معنا" content="واتساب: 79306202 | ممكن@mumkin-om.com | @mumkin_om" />} />
      </Routes>
    </Router>
  );
};

export default App;