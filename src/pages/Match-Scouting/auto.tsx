import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CreateQuestions from "../../components/ts-tsx/matchauto";

interface QuestionsProps {
  questionsVal: any[];
}

const MatchScoutingAuto: React.FC = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const GetQuestions = async () => {
            const response = await fetch("/api/match-scouting-auto");
            const data = await response.json();

            setQuestions(data);
        }

        GetQuestions();
    }, []);

    const Blacked: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Match Scouting - Scouting Website</title>
            </Helmet>
            <div className="overlay" />
            <center id="center">
                <br /><br /><br /><br />

                <h1 id="Match-Scouting" data-animate>Match Scouting Form</h1>
                <CreateQuestions questionsVal={questions} />
                <button onClick={Blacked} id="Back" data-animate>Go Back</button>
            </center>
        </HelmetProvider>
    )
}

export default MatchScoutingAuto;