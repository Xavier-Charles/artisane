import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import {
  getUserbyId,
  handleEmailSubscribe,
  verifyEmailLink,
} from "../context/firebaseContext";
import { UserContext } from "../context/userContext";

const SubscribePage = () => {
  const [searchParams] = useSearchParams();
  const { setUser, user } = useContext(UserContext);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const searchParamApikey = searchParams.get("apiKey");
    if (searchParamApikey === import.meta.env.VITE_FIREBASE_API_KEY) {
      const getUser = (userId) => getUserbyId(userId, setUser);
      verifyEmailLink(getUser);
    }
  }, []);
  const onSubscribe = () => handleEmailSubscribe(name, email, setResponse);
  return (
    <section className="w-full h-full relative flex justify-center items-center">
      {console.log(user)}
      <Subscribe
        response={response}
        onSubscribe={onSubscribe}
        setName={setName}
        setEmail={setEmail}
      />
    </section>
  );
};

export default SubscribePage;
