import React from "react";
import { users } from "./users"
import "./practika.css"
class Practika extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Kamoliddin",
            data: users,
        }
    }
    render() {
        return (
            <div className="wrapper">
                <center>
                    <h1>Create table Kamoliddin</h1>
                </center>
                <table className="table table-hover mt-4">
                    <thead>
                        <tr className="headText">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Addres</th>
                            <th>Status</th>
                            <th>Nickname</th>
                            <th>Univ</th>
                            <th>Job</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value) => (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.addres}</td>
                                    <td>{value.status}</td>
                                    <td>{value.nickname}</td>
                                    <td>{value.univ}</td>
                                    <td>{value.job}</td>
                                    <td><a href="#">Edit</a></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
export default Practika;





























