import React from 'react'
import BannerComponent from '../common/BannerComponent/BannerComponent';
import Footer from '../common/Footer/Footer';
import './careers.scss';
import img from '../../assets/banner/careers.png'
import icon from '../../assets/banner/icon.png';
import careers from '../../assets/commondesc/careers.png';
import DescriptionCommon from '../common/DescriptionCommon/DescriptionCommon';
import { Link } from 'react-router-dom';


const Carrers = () => {
  const title = "Careers";
  const pageName = "Meaningful Work , Meaningful Life";
  const descTitle = "TITLE";
  const subtitle = "Find Your Next Step at 3:33";
  const commonImg = careers;
  const content1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
  const btnTitle = "View Open Positions"
  
  return (
    <div className='careers'>
      <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
      <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1}  commonImg={commonImg} showBtn={true} btnTitle={btnTitle}/>
      
      <Footer />


    </div>
  )
}

export default Carrers