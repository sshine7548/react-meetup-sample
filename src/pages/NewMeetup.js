import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from "react-router-dom"; //在react-router-dom v6 useHistory()中被替換為useNavigate()

function NewMeetupPage(){
    const navigate = useNavigate(); //React Router 內提供 useNavigate 這個 Hooks 來重新導向畫面

    function addMeetupHandler(meetupData){
        fetch( 
            'https://react-meetup-sample-default-rtdb.firebaseio.com/meetup.json', //要傳送request到哪個url (此處為firebase realtime-db 的url 加上meetup資料夾(需加.json))
            { //fetch function的相關配置
                method: 'POST', //預設為GET
                body: JSON.stringify(meetupData), //要儲存的資料(轉成JSON格式)
                headers: { //資料內容以外的相關資訊
                    'Content-Type': 'application/json'
                }, 
            }

        )
        .then(()=>{ //回傳成功response要做的事 失敗-->.catch()
            alert("成功");
            navigate('/', { replace: true }); //將畫面重新導向AllMeetup.js
            // window.location.reload(); //頁面重整
        })
    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    ); 
}

export default NewMeetupPage;