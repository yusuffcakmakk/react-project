import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66YevY_10aWugxwv0j8JsHMF-rdgM-2CKyQ&usqp=CAU"
        />
        <Dropdown pointing="top right" text="Yusuf"> 
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgiler" icon="info" />
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={signOut} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
