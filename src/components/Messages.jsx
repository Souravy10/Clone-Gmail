import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messages = () => {
  const { searchText, emails } = useSelector((store) => store.appSlice);
  const [tempEmails, setTempEmails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const filteredEmails = emails?.filter((email) => {
      const lowerSearch = searchText.toLowerCase();
      return (
        email?.subject?.toLowerCase().includes(lowerSearch) ||
        email?.to?.toLowerCase().includes(lowerSearch) ||
        email?.message?.toLowerCase().includes(lowerSearch)
      );
    });
    setTempEmails(filteredEmails);
  }, [searchText, emails]);

  return (
    <div className="space-y-2">
      {tempEmails && tempEmails.length > 0 ? (
        tempEmails.map((email) => (
          <Message key={email.id} email={email} />
        ))
      ) : (
        <p className="text-gray-500 text-sm text-center">No emails found</p>
      )}
    </div>
  );
};

export default Messages;
