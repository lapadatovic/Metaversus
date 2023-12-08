import styles from "../styles";

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>

    <div 
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
      <p className="text-white font-bold text-[20px]">
        0{number}
      </p>
    </div>

    <p className=" border border-[#ffffff] p-2 flex-1 ml-[30px] font-normal text-[18px] text-white leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
