import "../css/ThankYou.css";
import iconThankYou from "../assets/images/icon-thank-you.svg";

function ThankYou() {
    return (
        <div className="main__thank-you">
            <img className="thank-you__icon" src={iconThankYou} alt="Checkmark Thank You" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    );



}

export default ThankYou;