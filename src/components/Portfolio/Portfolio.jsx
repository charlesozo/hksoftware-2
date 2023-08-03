import React,{useState} from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  const [show, setShow] = useState(false)
  function handleProjectLink(link) {
    window.open(link, '_blank');
  }
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText" onClick={()=>setShow(true)}>Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" onClick={()=>handleProjectLink("https://www.crops-trading.in/fiwinadi/login.php")} />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" onClick={()=>handleProjectLink("https://www.travoticholidays.com/")} />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" onClick={()=>handleProjectLink("https://lenstax.com/")} />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase5.png" alt="project" onClick={()=>handleProjectLink("https://timesmedia.co.in/ec/public/")} />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase6.png" alt="project" onClick={()=>handleProjectLink("https://www.travoticholidays.com/")} />
         </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
