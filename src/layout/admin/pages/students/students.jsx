import React from "react";
import { useOutletContext } from "react-router-dom";
import { GetWord } from "../../../../utils";
import * as AiIcons from "react-icons/ai";

const Students = () => {
  const [pageName, setPageName] = useOutletContext();
  setPageName(GetWord("Students"));
  return (
    <div className="row dataTable">
      <div className="col-12">
        <div class="input-group">
          <input
            type="search"
            class="form-control"
            placeholder={GetWord("ara...")}
          />
          <span class="input-group-text" id="basic-addon2">
            <AiIcons.AiOutlineSearch className="input-icon" />
          </span>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ID</th>
                <th>Kayıt Tarihi</th>
                <th>isim</th>
                <th>Eposta Adresi</th>
                <th>Soru Hakkı</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="black">#001234</td>
                <td>12.12.2022 - 12:58</td>
                <td>Mali KARA</td>
                <td>deneme@deneme.com</td>
                <td>205</td>
                <td>
                  <button className="btn btn-primary">Detay </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
