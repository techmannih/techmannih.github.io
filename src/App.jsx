
import {
  Business,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials
} from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-slate-950 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-slate-950 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-slate-950 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Testimonials />
     
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
