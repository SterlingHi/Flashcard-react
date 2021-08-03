import React from 'react';

const ShowFlashcards = (props)=> {



    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr><td> Flashcards </td></tr>
                    {props.flashcards.map((flashacrd, id) => {
                        return (
                            <tr key= {id}>
                                <td>{flashcard.question}</td>
                                <td className="d-flex justify-content-center">
                                    <button className="btn btn-primary w-md-25"onClick={() => props.showAnswer(flashcard.answer)}>Back</button>
                                </td>  
                                <td className="d-flex justify-content-center">
                                    <button className="btn btn-primary w-md-25" onClick={() => props.changeForm(flascard.id)}>
                                    Update
                                    </button>
                                </td> 
                            </tr>    
                        )}
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default ShowFlashcards