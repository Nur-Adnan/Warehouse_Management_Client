import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="blogs my-5">
            <div className='container'>
                <Card.Title>1) Difference between Javascript and Nodejs ? </Card.Title>
                <div>
                    <b>Ans: </b><p>JavaScript is a simple programming language that runs on the JavaScript Engine of any web browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be accessed easily from JavaScript code for optimal performance.</p>
                    <strong >Difference between JavaScript and Nodejs: </strong>
                </div>
                <div className='mb-4 mt-3'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th className='text-center'>S.No</th>
                                <th className='text-center'>Javascript</th>
                                <th className='text-center'>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'> 1</td>
                                <td className='text-center'>Javascript is a programming language for writing website scripts.</td>
                                <td className='text-center'>The Node JS runtime status is JavaScript.</td>
                            </tr>
                            <tr>
                                <td className='text-center'>2</td>
                                <td className='text-center'>JavaScript is only executable in a web browser.</td>
                                <td className='text-center'>Node JS enables the execution of JavaScript outside the browser.</td>
                            </tr>
                            <tr>
                                <td className='text-center'>3</td>
                                <td className='text-center'>JavaScript is utilized primarily on the client-side.</td>
                                <td className='text-center'>Node JS is used on the server.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>



                <Card.Title>2) Differences between sql and nosql databases?</Card.Title>
                <div>
                    <b>Ans:</b>  
                    <p>NoSQL databases scale horizontally, whereas SQL databases scale vertically. NoSQL databases are document, key-value, graph, or wide-column stores, as opposed to table-based SQL databases. SQL databases are superior to NoSQL for unstructured data such as documents and JSON.</p> 
                </div>
                <div className='mb-4'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th className='text-center'>S.No</th>
                                <th className='text-center'>SQL</th>
                                <th className='text-center'>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>1</td>
                                <td className='text-center'>Relational Database Management System is SQL (RDBMS)</td>
                                <td className='text-center'>NoSQL is a distributed or non-relational database system.</td>
                            </tr>
                            <tr>
                                <td className='text-center'>2</td>
                                <td className='text-center'>The schema of a SQL database is static or predefined.</td>
                                <td className='text-center'>NoSQL Database has dynamic schema.</td>
                            </tr>
                            <tr>
                                <td className='text-center'>3</td>
                                <td className='text-center'>SQL Database is incompatible with the storage of classified information.</td>
                                <td className='text-center'>NoSQL databases are optimal for storing sensitive information.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <Card.Title>3) What is the purpose of jwt and how does it work?</Card.Title>
                <div>
                    <strong>Ans:</strong>
                    <p>JWT, or JSON Web Token, is an open standard used to exchange security information between client and server. Each JWT is comprised of encoded JSON objects, which include a set of claims. JWTs are signed with a cryptographic algorithm to guarantee that the claims cannot be modified after the token has been issued.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;