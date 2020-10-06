import React, {Component} from 'react';
import firebase from'../firebase/firebase';

class UserInfoForm extends Component {
    state ={
        firstname: '',
        lastname: '',
        department: '',
        likeTheRoom: '',
        classIsCrowded: '',
        parkingDistance: '',
        seatingArrangement: '',
        dislikeSeating: '',
        otherRequests: ''
    }

    // Field change handlers
    // ----------------------------------------------------

    // User Text Fields
    handleFirstNameChange = e => {
        this.setState({ firstname: e.target.value });
        console.log(this.state.firstname);
    }
    handleLastNameChange = e => {
        this.setState({ lastname: e.target.value })
    }
    handleDepartmentChange = e => {
        this.setState({ department: e.target.value })
    }
    handleOtherRequestsChange = e => {
        this.setState({ otherRequests: e.target.value })
    }

    // Radio Button Fields
    handleLikeTheRoomChange = e => {
        this.setState({ likeTheRoom: e.target.value })
    }
    handleClassIsCrowdedChange = e => {
        this.setState({ classIsCrowded: e.target.value})
    }
    handleParkingDistanceChange = e => {
        this.setState({ parkingDistance: e.target.value })
    }
    handleSeatingArrangementChange = e => {
        this.setState({ seatingArrangement: e.target.value })
    }

    // Checkbox Fields
    handleAmenetiesNeededChange = e => {
        const item = e.target.name
        const isChecked = e.target.checked
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }))
    }

    // Add to database
    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        // let db = firebase.firestore();
        // console.log("Calling collection");
        // console.log(this.state);
        // console.log(typeof(this.state))
        // db.collection("test").add(this.state)
        //   .then(function (docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        //   })
        //   .catch(function (error) {
        //     console.error("Error adding document: ", error);
        //   });
        }

    render() {
        const amenitiesNeededOptions = [
            'Microphone', 'Student Laptops', 'Projector', 'Air Conditioning', 'Projector Screen', 'Speakers'
        ]
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <label for="firstname">First Name:</label>
                    <br/>
                    <input type="text" id="firstname" name="firstname" onChange={this.handleFirstNameChange}/>
                    <br/>

                    <label for="lastname">Last Name:</label>
                    <br/>
                    <input type="text" id="lastname" name="lastname" onChange={this.handleLastNameChange}/>
                    <br/>

                    <label for="department">Department:</label>
                    <br/>
                    <input type="text" id="department" name="department" onChange={this.handleDepartmentChange}/>
                    <br/>

                    <label for="likeTheRoom">Do you like your room?
                    <br/>
                        <input
                            type="radio"
                            value="Yes"
                            checked={this.state.likeTheRoom === "Yes"}
                            onChange={this.handleLikeTheRoomChange}
                        />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="No"
                            checked={this.state.likeTheRoom === "No"}
                            onChange={this.handleLikeTheRoomChange}
                        />
                        <span>No</span>
                    </label>
                    <br/>

                    <label for="classCrowded">Is your class too crowded?
                    <br/>
                        <input
                            type="radio"
                            value="Yes"
                            checked={this.state.classIsCrowded === "Yes"}
                            onChange={this.handleClassIsCrowdedChange}
                        />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="No"
                            checked={this.state.classIsCrowded === "No"}
                            onChange={this.handleClassIsCrowdedChange}
                        />
                        <span>No</span>
                    </label>
                    <br/>

                    <label for="parkingDistance">How far away do you park?
                    <br/>
                        <input
                            type="radio"
                            value="Far"
                            checked={this.state.parkingDistance === "Yes"}
                            onChange={this.handleParkingDistanceChange}
                        />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Not too far"
                            checked={this.state.parkingDistance === "Not too far"}
                            onChange={this.handleParkingDistanceChange}
                        />
                        <span>No</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Close"
                            checked={this.state.parkingDistance === "Close"}
                            onChange={this.handleParkingDistanceChange}
                        />
                        <span>No</span>
                    </label>
                    <br/>

                    <label for="seatingArrangment">Do you like your seating arrangements?
                    <br/>
                        <input
                            type="radio"
                            value="Yes"
                            checked={this.state.seatingArrangement === "Yes"}
                            onChange={this.handleSeatingArrangementChange}
                        />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="No"
                            checked={this.state.seatingArrangement === "No"}
                            onChange={this.handleSeatingArrangementChange}
                        />
                        <span>No</span>
                    </label>
                    <br/>

                    <label for="otherRequests">Any other requests?</label>
                    <br/>
                    <textarea id="otherRequests" name="otherRequests" rows="8" cols="50" onChange={this.handleDepartmentChange}/>
                    <br/>

                    <input type="submit" onClick={this.submitForm}/>
                </form>
            </div>
        )
    }
}

export default UserInfoForm;