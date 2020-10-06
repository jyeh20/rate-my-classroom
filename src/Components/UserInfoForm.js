import React, { useState } from 'react';
import firebase from'../firebase/firebase';

function UserInfoForm() {
    // Data vars
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [likeTheRoom, setLikeTheRoom] = useState(false);
    const [classIsCrowded, setClassIsCrowded] = useState(false);
    const [microphone, setMicrophone] = useState(false);
    const [laptops, setLaptops] = useState(false);
    const [projector, setProjector] = useState(false);
    const [airConditioning, setAirConditioning] = useState(false);
    const [projectorScreen, setProjectorScreen] = useState(false);
    const [speakers, setSpeakers] = useState(false);
    const [parkingDistance, setParkingDistance] = useState('');
    const [seatingArrangement, setSeatingArrangement] = useState(false);
    const [dislikeSeating, setDislikeSeating] = useState('');
    const [otherRequests, setOtherRequests] = useState('');

    // Database reference
    let db = firebase.firestore();
    let timestamp = firebase.firestore.Timestamp.now();

    // Data
    let newData = {
        Firstname: firstName,
        Lastname: lastName,
        Department: department,
        LikeRoom: likeTheRoom,
        CrowdedClass: classIsCrowded,
        AmenitiesNeeded: {
            Microphone: microphone,
            Laptops: laptops,
            Projector: projector,
            AirConditioning: airConditioning,
            ProjectorScreen: projectorScreen,
            Speakers: speakers
        },
        ParkingDistance: parkingDistance,
        SeatingArrangement: seatingArrangement,
        NewSeatingArrangement: dislikeSeating,
        OtherRequests: otherRequests,
        timestamp: timestamp
    }

    // Push data to Firebase
    function submitForm () {
        const newDocRef = db.collection("user-test").doc();
        newDocRef.set(
            newData
        ).then(function() {
            console.log("Document successfully written!")
        })
    }


    return (
        <div>
                <form>


                    <label for="firstname">First Name:</label>
                    <br/>
                    <input type="text" id="firstname" name="firstname" onChange={() => setFirstName(document.getElementById("firstname").value)}/>
                    <br/>


                    <label for="lastname">Last Name:</label>
                    <br/>
                    <input type="text" id="lastname" name="lastname" onChange={() => setLastName(document.getElementById("lastname").value)}/>
                    <br/>


                    <label for="department">Department:</label>
                    <br/>
                    <input type="text" id="department" name="department" onChange={() => setDepartment(document.getElementById("department").value)}/>
                    <br/>


                    <label for="amenitiesNeeded">Do you need anything?</label>
                    <br/>
                        <input
                            type="checkbox"
                            id="microphone"
                            name="microphone"
                            value="yes"
                            onChange={() => setMicrophone(document.getElementById("microphone").checked)}
                        />
                        <label for="microphone">Microphone</label>
                        <br/>

                        <input
                            type="checkbox"
                            id="laptops"
                            name="laptops"
                            value="yes"
                            onChange={() => setLaptops(document.getElementById("laptops").checked)}
                        />
                        <label for="laptops">Laptops</label>
                        <br/>

                        <input
                            type="checkbox"
                            id="projector"
                            name="projector"
                            value="yes"
                            onChange={() => setProjector(document.getElementById("projector").checked)}
                        />
                        <label for="projector">Projector</label>
                        <br/>

                        <input
                            type="checkbox"
                            id="airConditioning"
                            name="airConditioning"
                            value="yes"
                            onChange={() => setAirConditioning(document.getElementById("airConditioning").checked)}
                        />
                        <label for="airConditioning">Air Conditioning</label>
                        <br/>

                        <input
                            type="checkbox"
                            id="projectorScreen"
                            name="projectorScreen"
                            value="yes"
                            onChange={() => setProjectorScreen(document.getElementById("projectorScreen").checked)}
                        />
                        <label for="projectorScreen">Projector Screen</label>
                        <br/>

                        <input
                            type="checkbox"
                            id="speakers"
                            name="speakers"
                            value="yes"
                            onChange={() => setSpeakers(document.getElementById("speakers").checked)}
                        />
                        <label for="speakers">Speakers</label>
                        <br/>


                    <label for="likeTheRoom">Do you like your room?
                    <br/>
                        <input
                            type="radio"
                            value="Yes"
                            name="likeTheRoom"
                            onChange={() => setLikeTheRoom(true)}
                        />
                        <span>Yes</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="No"
                            name="likeTheRoom"
                            onChange={() => setLikeTheRoom(false)}
                        />
                        <span>No</span>
                    </label>
                    <br/>


                    <label for="classCrowded">Is your class too crowded?
                    <br/>
                        <input
                            type="radio"
                            value="Yes"
                            name="classCrowded"
                            onChange={() => setClassIsCrowded(true)}
                        />
                        <span>Yes</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="No"
                            name="classCrowded"
                            onChange={() => setClassIsCrowded(false)}
                        />
                        <span>No</span>
                    </label>
                    <br/>


                    <label for="seatingArrangment">Do you like your seating arrangements?
                    <br/>
                        <input
                            type="radio"
                            value="Yes"
                            name="seatingArrangement"
                            onChange={() => setSeatingArrangement(true)}
                        />
                        <span>Yes</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="No"
                            name="seatingArrangement"
                            onChange={() => setSeatingArrangement(false)}
                        />
                        <span>No</span>
                    </label>
                    <br/>


                    <label for="dislikeSeating">If you don't like your arrangement, why not? And how can we fix it?</label>
                    <br/>
                    <textarea id="dislikeSeating" name="dislikeSeating" rows="8" cols="50" onChange={() => setDislikeSeating(document.getElementById("dislikeSeating").value)}/>
                    <br/>


                    <label for="parkingDistance">How far away do you park?
                    <br/>
                        <input
                            type="radio"
                            value="Far"
                            name="parkingDistance"
                            onChange={() => setParkingDistance("far")}
                        />
                        <span>Far</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Not too far"
                            name="parkingDistance"
                            onChange={() => setParkingDistance("not too far")}
                        />
                        <span>Not Too Far</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Close"
                            name="parkingDistance"
                            onChange={() => setParkingDistance("close")}
                        />
                        <span>Close</span>
                    </label>
                    <br/>


                    <label for="otherRequests">Any other requests?</label>
                    <br/>
                    <textarea id="otherRequests" name="otherRequests" rows="8" cols="50" onChange={() => setOtherRequests(document.getElementById("otherRequests").value)}/>
                    <br/>
                </form>

                    <button onClick={submitForm}>Submit</button>


            </div>
    )
}

export default UserInfoForm;