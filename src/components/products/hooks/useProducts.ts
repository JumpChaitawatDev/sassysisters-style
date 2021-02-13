import {useEffect, useState, useCallback} from "react";
import firebase from "firebase/app";
import {v4 as uuidv4} from "uuid";

export type useProductsProps = {};
type UserType = {
  displayName: string;
  username: string;
  password: string;
};
const useProducts = (props: useProductsProps) => {
  const [users, setUsers] = useState<any[]>([]);

  const usersStore = firebase.firestore().collection("users");

  const getUsers = () => {
    usersStore.onSnapshot((query) => {
      const items: any[] = [];
      query.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
    });
  };

  const getUsers2 = useCallback(() => {
    usersStore.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setUsers(items);
    });
  }, [usersStore]);

  const handleAddUser = () => {
    const id = uuidv4();
    const user: UserType = {
      displayName: id,
      username: id,
      password: id,
    };
    usersStore
      .doc(id)
      .set(user)
      .catch((err) => {
        console.log("error!", err);
      });
  };
  const deleteUser = () => {
    usersStore
      .doc("092121e7-bbaf-4568-a42f-d7358a852d62")
      .delete()
      .catch((err) => {
        console.log("error!", err);
      });
  };
  const updateUser = () => {
    usersStore
      .doc("479e480d-9751-4e8c-b563-41ef75969f80")
      .update({
        displayName: "jump",
      })
      .catch((err) => {
        console.log("error!", err);
      });
  };

  useEffect(() => {
    getUsers2();
  }, [usersStore, getUsers2]);

  return {
    users,
    handleAddUser,
    deleteUser,
    updateUser,
  };
};
export default useProducts;
