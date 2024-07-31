import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react';

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const[loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    fetch( //從資料庫取資料
      'https://react-meetup-sample-default-rtdb.firebaseio.com/meetup.json'
    )
      .then((res)=>{ //帶有Response物件的Promise物件
        return res.json(); //response.json() -> 從Response物件中抽取資料並處理成JSON格式
      })
      .then((data)=>{ //接收上一階段處理完的資料
        const meetups = [];

        for (const key in data){ //在 MeetupList.js 元件當中有使用到了陣列的處理方法 map ，所以必須將原本的物件改成陣列
          const meetup = {
            id: key,
            ...data[key],
          };
          // console.log(meetup);
          meetups.push(meetup);
        };

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  },[]);
  if(isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
      <section>
          <h1>All Meetups Page</h1>
          <MeetupList meetups={loadedMeetups}/>            
      </section>
  );
}

export default AllMeetupsPage;