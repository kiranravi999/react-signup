import { useState, useEffect } from "react";
import "./App.css";
import SavedInterests from "./SavedInterests";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const UserInterests = () => {
  const categoryData = [];
  for (let i = 1; i <= 100; i++) {
    categoryData.push({
      id: i,
      category: `Category ${i}`,
      ischecked: false,
    });
  }

  console.log(categoryData.slice(1, 7), "datatta");
  const [a, setA] = useState(categoryData);
  const [count, setCount] = useState(1);
  console.log(a, "kkkkkk");
  const navigate = useNavigate();

  useEffect(() => {
    let signedUser = JSON.parse(localStorage.getItem("loginUser"));
    let loginusersList = getUsersListFromLocalStorage();

    if (loginusersList.length > 0) {
      let userInterests = [];
      loginusersList.forEach((item) => {
        if (item.userid === signedUser) {
          userInterests = item.listArray;
          setA(userInterests);
        }
      });
    }
  }, []);

  function getUsersListFromLocalStorage() {
    let stringifiedUsersList = localStorage.getItem("signedusersList");
    let parsedUsersList = JSON.parse(stringifiedUsersList);
    if (parsedUsersList === null) {
      return [];
    } else {
      return parsedUsersList;
    }
  }
  const Changed = (item) => {
    setA(
      a.map((each) => {
        if (each.id == item.id) {
          return { ...each, ischecked: !each.ischecked };
        } else {
          return each;
        }
      })
    );
  };

  const saved = () => {
    const obj = {
      userid: JSON.parse(localStorage.getItem("loginUser")),
      listArray: a,
    };
    const loginusersList = getUsersListFromLocalStorage();
    localStorage.setItem(
      "signedusersList",
      JSON.stringify([...loginusersList, obj])
    );

    navigate("/login");
  };

  const increaseCount = () => {
    if (count < 17) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const slicedData = () => {
    switch (count) {
      case 1:
        return a.slice(0, 6);
      case 2:
        return a.slice(6, 12);
      case 3:
        return a.slice(12, 18);
      case 4:
        return a.slice(18, 24);
      case 5:
        return a.slice(24, 30);
      case 6:
        return a.slice(30, 36);
      case 7:
        return a.slice(36, 42);
      case 8:
        return a.slice(42, 48);
      case 9:
        return a.slice(48, 54);
      case 10:
        return a.slice(54, 60);
      case 11:
        return a.slice(60, 66);
      case 12:
        return a.slice(66, 72);
      case 13:
        return a.slice(72, 78);
      case 14:
        return a.slice(78, 84);
      case 15:
        return a.slice(84, 90);
      case 16:
        return a.slice(90, 96);
      case 17:
        return a.slice(96, 100);
      default:
        return null;
    }
  };

  return (
    <div>
    <Header/>
    <div className="con m-0 p-0 d-flex flex-column justify-content-center align-items-center">
      <form className=" form-con p-4  mt-2 d-flex flex-column">
        <h4 className="text-center">Please mark your interests!</h4>
        <p className="text-center">We will keep you notified.</p>
        <p>My saved interests!</p>

        {slicedData().map((item) => (
          <SavedInterests key={item.id} item={item} Changed={Changed} />
        ))}

        <div className="d-flex justify-content-center">
          <p onClick={decreaseCount}>&lt;</p>
          <p className="mx-4 ">{count}</p>
          <p onClick={increaseCount}>&gt;</p>
        </div>
        <button className="btn mt-2 btn-dark" type="submit" onClick={saved}>
          Save
        </button>
      </form>
    </div>
    </div>
  );
};

export default UserInterests;
