import Navbar from "@/components/Navbar/Navbar";
import FirstDiv from "@/components/FirstDiv/FirstDiv";
import styles from "../styles/Home.module.css";
import Footer from "@/components/Footer/Footer";
import SecondDiv from "@/components/SecondDiv/SecondDiv";
import ThirdDiv from "@/components/ThirdDiv/ThirdDiv";
export default function Home() {
  return (
    <div className={styles.index}>
      <Navbar></Navbar>
      <FirstDiv></FirstDiv>
      <SecondDiv></SecondDiv>
      <ThirdDiv></ThirdDiv>
      <Footer></Footer>
    </div>
  );
}
