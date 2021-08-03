import React from 'react';

const DisplayAllCollections = (props) => {
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr><td>Collections</td></tr>
                        {props.collections.map((collections, id) => {
                            return (
                                <tr key= {id}>
                                    <td>{collections.name}</td>
                                    <td className="d-flex justify-content-center">
                                        <button classname="btn btn-primary w-md-25" onClick={() => props.gatherFlashCards(collections.id)}>FlashCards</button>
                                    </td>
                                </tr>
                         )
                        })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default DisplayAllCollections;