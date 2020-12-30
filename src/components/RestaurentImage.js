import React from 'react'
import Fastor from '../assets/logo.png';
import {
    FacebookShareButton,
    EmailShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    EmailIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon
} from "react-share";
export const RestaurentImage = (props) => {
    const { image } = props;
    return (
        <div>
            <div className="text-align">
                <FacebookShareButton url={image}  ><FacebookIcon round={true} className="icon" /></FacebookShareButton>
                <EmailShareButton url={image}><EmailIcon round={true} className="icon" /></EmailShareButton>
                <LinkedinShareButton url={image}><LinkedinIcon round={true} className="icon" /></LinkedinShareButton>
                <RedditShareButton url={image}><RedditIcon round={true} className="icon" /></RedditShareButton>
                <TelegramShareButton url={image}><TelegramIcon round={true} className="icon" /></TelegramShareButton>
                <TwitterShareButton url={image}><TwitterIcon round={true} className="icon" /></TwitterShareButton>
                <WhatsappShareButton url={image}><WhatsappIcon round={true} className="icon" /></WhatsappShareButton>
            </div>
            <div className="image-container">
                <img src={image} className="image2" />
                <img src={Fastor} width="100px" className="logo" />
            </div>
        </div>
    )
}
