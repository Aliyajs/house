import React from 'react';

function Dashboard(){

        const [data, setData] = useState(null);
    
    useEffect(()=> {
        const tokens = JSON.parse(localStorage.getItem("user"));
        fetch("http://giftme.site/auth/users/me/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + tokens.access,
            }            
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
    },[])

    return(
        <div>
            Dashboar
            id: {data?.id},
            <br />
            mail: {data?.email}
        </div>
    );
}
export  default Dashboard;