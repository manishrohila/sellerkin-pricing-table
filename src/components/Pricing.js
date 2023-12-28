import React from 'react'
import "./Pricing.css"
import correct from "../img/Mask group (1).svg"
import vector from "../img/Vector.svg"
import rectangle from "../img/Rectangle 323.svg"
const Pricing = () => {
    return (
        <div>
            <div className='flex justify-center items-center pt-10'>
                <p className='md:text-5xl text-2xl'>Pricing Table for <span className='text-custom-color-1'>Sellerkin</span> </p>
            </div>
            <div className=' hidden md:flex justify-center items-center mt-20 '>
                <div className='w-5/6 mb-20'>
                    <table className='w-full'>
                        <tr>
                            <th>Features</th>
                            <th>Basic</th>
                            <th className='heading-color text-custom-color-1 border-none'>Standard</th>
                            <th>Pro</th>
                        </tr>
                        <tr>
                            <td>Searchable Products via Category</td>

                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Product Finder</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Listing Analyzer</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>Shop Analyzer</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td><strong>Connect multiple shops</strong></td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>Keyword Finder-Related</p>
                                    <p>Keyword Ideas only</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>Etsy Fee Calculator</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Use to Launch Unlimited</p>
                                    <p className='font-bold'>products (Priceless)</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <strong>Searches per month for lifetime</strong>

                            </td>

                            <td>
                                <div className='flex justify-center items-center' >
                                    <p>500</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <p>1500</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <p>5000</p>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Export data</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Adavanced data feartures</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Premium metrics: conversion</p>
                                    <p className='font-bold'>rate, Total views + More</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>Quick sort ability</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Advanced Filters</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Additional Shop insights: Shop Age</p>
                                    <p className='font-bold'>Sales, Conversion Rate, Total views,</p>
                                    <p className='font-bold'>Sales per listings, Review count</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className=''>Tag Analyzer - Can check</p>
                                    <p className=''>Tags of any listings in one click</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Additional Listings Insights-</p>
                                    <p className='font-bold'>Quantity Left, Listing Age,</p>
                                    <p className='font-bold'>Favorites + more</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className=''>All updates and upgrades for all</p>
                                    <p className=''>above mentioned features for lifetime</p>

                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className='font-bold'>
                                Bonus 1: Listing Optimisation Guide

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td className='font-bold'>
                                Bonus 2: Etsy Success Guidebook

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td className='font-bold'>
                                Bonus 3: Private Community

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr className=''>
                            <td>

                            </td>
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$97 $497</p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$147 <span className='cut-text'>$497</span> </p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>

                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$297 <span className='cut-text'>$1497</span> </p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>

                        </tr>

                    </table>
                </div>

            </div>
            <div className='bg-custom-color flex flex-col justify-center mx-auto  w-[70%] md:hidden mb-5 mt-5 '>
                <div className='relative'>
                    <img src={rectangle} alt="" className='' />
                    <p className='absolute left-24 top-0 bottom-0 text-2xl '>Basic</p>
                </div>
                <div className='flex flex-col justify-center ml-8 gap-4 mt-5'>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Searchable Products</p>
                            <p>via Category</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Finder</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Listing Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>shop Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Connect multiple shops</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>keyword Finder:</p>
                            <p>Related Keyword</p>
                            <p>Ideas only</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Use to Launch Unlimited</p>
                            <p className='font-bold'>Products (Priceless) </p>

                        </div>
                    </div>
                    
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>500 Searches per</p>
                            <p className='font-bold'>month for lifetime </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Adavanced data features</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Premium metrics</strong></p>
                            <p><strong>conversion rate,</strong></p>
                            <p><strong>Total views + more</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Quick sort ability</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Filters</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Shop</strong></p>
                            <p><strong>Insights:Shop Age,</strong></p>
                            <p><strong>Sales, Conversion Rate,</strong></p>
                            <p><strong>Total views, Sales per</strong></p>
                            <p><strong>listings,Review count</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Tag Analyzer- Can</p>
                            <p>check Tags of any</p>
                            <p>listing in one click</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Listing</strong></p>
                            <p><strong> Insights- Quantity</strong></p>
                            <p>left, Listing Age,</p>
                            <p>Favorites+More</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>All updates and</p>
                            <p>Upgrades for all</p>
                            <p>above mentioned</p>
                            <p>features for lifetime</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 1: </strong> Listing </p>
                            <p>Optimization Guide</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 2: </strong> Etsy</p>
                            <p>Success Guidebook</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 3: </strong>Private</p>
                            <p>Community Access</p>

                        </div>
                    </div>
                    <div className='text-center mb-10 flex flex-col gap-2 '>
                        <p className='text-2xl'>Total Value: <span className='cut-text'>Subscription</span></p>
                        <p className='text-2xl text-custom-color-1 font-bold'>Today's Price:</p>
                        <p className='text-2xl text-custom-color-1 font-bold'>$97 $497</p>
                        <p className='text-2xl'>One Time Payment</p>
                        <button className='bg-custom-color-1 w-1/2 mx-auto p-2 text-xl text-white rounded-md'>Buy Now</button>
                    </div>
                </div>


            </div>
            <div className='bg-custom-color flex flex-col justify-center mx-auto  w-[70%] md:hidden mb-5 mt-10'>
                <div className='relative'>
                    <img src={rectangle} alt="" />
                    <p className='absolute left-24 top-0 bottom-0 text-2xl'>Standard</p>
                </div>
                <div className='flex flex-col justify-center ml-8 gap-4 mt-5'>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Searchable Products</p>
                            <p>via Category</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Finder</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Listing Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>shop Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Connect multiple shops</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>keyword Finder:</p>
                            <p>Related Keyword</p>
                            <p>Ideas only</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Use to Launch Unlimited</p>
                            <p className='font-bold'>Products (Priceless) </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>1500 Searches per</p>
                            <p className='font-bold'>month for lifetime </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Adavanced data features</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Premium metrics</strong></p>
                            <p><strong>conversion rate,</strong></p>
                            <p><strong>Total views + more</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Quick Sort ability</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Filters</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Shop</strong></p>
                            <p><strong>Insights:Shop Age,</strong></p>
                            <p><strong>Sales, Conversion Rate,</strong></p>
                            <p><strong>Total views, Sales per</strong></p>
                            <p><strong>listings,Review count</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Tag Analyzer- Can</p>
                            <p>check Tags of any</p>
                            <p>listing in one click</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Listing</strong></p>
                            <p><strong> Insights- Quantity</strong></p>
                            <p>left, Listing Age,</p>
                            <p>Favorites+More</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>All updates and</p>
                            <p>Upgrades for all</p>
                            <p>above mentioned</p>
                            <p>features for lifetime</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 1: </strong> Listing </p>
                            <p>Optimization Guide</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 2: </strong> Etsy</p>
                            <p>Success Guidebook</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 3: </strong>Private</p>
                            <p>Community Access</p>

                        </div>
                    </div>
                    <div className='text-center mb-10 flex flex-col gap-2 '>
                        <p className='text-2xl'>Total Value: <span className='cut-text'>Subscription</span></p>
                        <p className='text-2xl text-custom-color-1 font-bold'>Today's Price:</p>
                        <p className='text-2xl text-custom-color-1 font-bold'>$147 $897</p>
                        <p className='text-2xl'>One Time Payment</p>
                        <button className='bg-custom-color-1 w-1/2 mx-auto p-2 text-xl text-white rounded-md'>Buy Now</button>
                    </div>
                </div>


            </div>
            <div className='bg-custom-color flex flex-col justify-center mx-auto  w-[70%] md:hidden mb-10 mt-10'>
                <div className='relative'>
                    <img src={rectangle} alt="" />
                    <p className='absolute left-32 top-0 bottom-0 text-2xl'>Pro</p>
                </div>
                <div className='flex flex-col justify-center ml-8 gap-4 mt-5'>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Searchable Products</p>
                            <p>via Category</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Finder</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Listing Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>shop Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Connect multiple shops</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>keyword Finder:</p>
                            <p>Related Keyword</p>
                            <p>Ideas only</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Use to Launch Unlimited</p>
                            <p className='font-bold'>Products (Priceless) </p>

                        </div>
                    </div>
                    
                    
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Adavanced data features</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Premium metrics</strong></p>
                            <p><strong>conversion rate,</strong></p>
                            <p><strong>Total views + more</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Quick Sort ability</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Filters</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Shop</strong></p>
                            <p><strong>Insights:Shop Age,</strong></p>
                            <p><strong>Sales, Conversion Rate,</strong></p>
                            <p><strong>Total views, Sales per</strong></p>
                            <p><strong>listings,Review count</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Tag Analyzer- Can</p>
                            <p>check Tags of any</p>
                            <p>listing in one click</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Listing</strong></p>
                            <p><strong> Insights- Quantity</strong></p>
                            <p>left, Listing Age,</p>
                            <p>Favorites+More</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>All updates and</p>
                            <p>Upgrades for all</p>
                            <p>above mentioned</p>
                            <p>features for lifetime</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 1: </strong> Listing </p>
                            <p>Optimization Guide</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 2: </strong> Etsy</p>
                            <p>Success Guidebook</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 3: </strong>Private</p>
                            <p>Community Access</p>

                        </div>
                    </div>
                    <div className='text-center mb-10 flex flex-col gap-2 '>
                        <p className='text-2xl'>Total Value: <span className='cut-text'>Subscription</span></p>
                        <p className='text-2xl text-custom-color-1 font-bold'>Today's Price:</p>
                        <p className='text-2xl text-custom-color-1 font-bold'>$297 $1497</p>
                        <p className='text-2xl'>One Time Payment</p>
                        <button className='bg-custom-color-1 w-1/2 mx-auto p-2 text-xl text-white rounded-md'>Buy Now</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Pricing
