import Navbar from "@/components/Navbar/Navbar";
import FirstDiv from "@/components/FirstDiv/FirstDiv";
import styles from "../styles/Home.module.css";
import Footer from "@/components/Footer/Footer";
import SecondDiv from "@/components/SecondDiv/SecondDiv";
import ThirdDiv from "@/components/ThirdDiv/ThirdDiv";
import Testonomial from "@/components/Testonomial/Testonomial";
import OurPlan from "@/components/OurPlan/OurPlan";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <div className={styles.index}>
      <Navbar></Navbar>
      <FirstDiv></FirstDiv>
      <SecondDiv></SecondDiv>
      <Testonomial></Testonomial>
      <ThirdDiv></ThirdDiv>
      <OurPlan></OurPlan>
      {/* <Products></Products> */}
      <Footer></Footer>
    </div>
  );
}
