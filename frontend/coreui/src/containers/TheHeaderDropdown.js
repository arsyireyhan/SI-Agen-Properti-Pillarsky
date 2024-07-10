import React, {useEffect, useState} from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLabel,
  CLink,
  CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {api} from "src/plugins/api";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { HashRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";


const TheHeaderDropdown = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const [userLog, setUserLog] = useState([])

  //get user data
  const getData = () => {
    api.get('/user', {
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(Response => {
      setData(Response.data.user)
      setUserLog(Response.data.userloggedin)
      setLoading(false)
    })
    .catch(error => {
      console.log(error);
    })
  }

  //Logout Function
  let user = JSON.parse(localStorage.getItem("user-info"));
  function logout() {
    localStorage.clear();
    history.push("/user/dashboard");
    window.location.reload();
  }
  console.warn(user);

  const Logout = () => {
    swal({
      title: "Warning",
      text: "Anda Yakin Ingin Logout?",
      icon: "Warning",
      buttons: true,
      dangerMode: true,
    })
    .then (async (willDelete) => {
      if (willDelete) {
        api.post('logout', {token: token,}, {
          headers: {
            Authorization :  `Bearer ${token}`,
          },
        })
        .then (async Response => {
          await swal ("Good Job!", "Logout Account Berhasil!", "success");
          localStorage.clear('token');
          // window.location.reload();
        })
        .catch(error => {
          swal("Oops", "Gagal Logout!", "Warning");
        })
      } else {
        await swal ("Logout Dibatalkan!");
        // window.location.reload();
      }
    });
  }

  useEffect(() => {
    getData()
  }, [token])

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"avatars/6.jpg"}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>

      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Login & Register</strong>
        </CDropdownItem>

        {localStorage.getItem("user-info") === null? (
          <CDropdownItem>
            <CNavItem>
              <CLink to={{ pathname: "/login" }}>Login</CLink>
            </CNavItem>
          </CDropdownItem>
        ): null}

        {/* <CDropdownItem>
          <CLink to={{ pathname: "/register" }}>Register</CLink>
        </CDropdownItem> */}
        
        
        {localStorage.getItem("user-info") ? (
          <div>
            <CDropdownItem>
              <CLink to={{pathname: `/user/profilUser/${user.id_account}`}}>
                <CIcon name="cil-user" className="mfe-2"/> {user && user.username}
              </CLink>
            </CDropdownItem>

            <CDropdownItem>
              <CNavItem onClick={logout}>Log Out</CNavItem>
            </CDropdownItem>
          </div>          
          ):null
        }

        {/* <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>

        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem>

        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
