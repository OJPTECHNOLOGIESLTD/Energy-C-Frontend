"use client";

import React, { useState } from 'react';
import IconStepper from '@/components/IconStepper';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import DatePicker from '@/components/DatePicker';
import { Circle_Selected, Circle_Unselected } from '@/assets';
import { data } from '@/data/pickupStations';
import Text from '@/components/Text';
import ContentContainer from '@/components/Container';
import { cartdata } from '@/data/cart';
import CartCard from '@/components/CartCard';
import Modal from '@/components/Modal';
import ImageViewer from '@/components/ImageViewer';
import CameraComponent from '@/components/Camera';
import MobileNav from '@/components/MobileNav';
import { FaCheckCircle } from 'react-icons/fa';
import { DASHBOARD_ROUTE, STORE_ROUTE } from '@/constants/routes';

export default function PickupDetails() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const [pickupType, setPickupType] = useState("home");
    const cart = cartdata
    const locationData = data
    const [pickupLocationId, setPickupLocationId] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const router = useRouter();

    const handleBack = () => {
        if (currentStep === 0) {
            router.back();
        } else {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePickUp = () => {
        setIsOpen(!isOpen);
        handleNext()
    }

    const handlelocation = (id: string, item: string) => {
        setPickupLocationId(id)
        setPickupLocation(item)
    }

    return (
        <div className="relative bg-[url('/images/bg.png')] bg-contain bg-center min-h-screen">

            <div className="absolute inset-0 bg-white bg-opacity-30"></div>

            <div className="relative z-3 mb-14">
                <IconStepper
                    currentStep={currentStep}
                    onBack={handleBack}
                />

                <div className="mt-4 p-4">

                    {currentStep === 0 && (
                        <div>
                            <div className="flex gap-4 mb-4 justify-between">
                                <Button
                                    title="Home Pick Up"
                                    variant={pickupType === 'home' ? 'tertiary' : 'secondary'}
                                    leftIcon={pickupType === 'home' ? <Circle_Selected /> : <Circle_Unselected />}
                                    onClick={() => setPickupType('home')}
                                    fullWidth
                                    className='capitalize py-[7px] px-0.5 rounded-[9.8px] text-[14.71px]'
                                />
                                <Button
                                    title="Pick Up Station"
                                    variant={pickupType === 'station' ? 'tertiary' : 'secondary'}
                                    leftIcon={pickupType === 'station' ? <Circle_Selected /> : <Circle_Unselected />}
                                    onClick={() => setPickupType('station')}
                                    fullWidth
                                    className='capitalize py-[7px] px-0.5 rounded-[9.8px] text-[14.71px]'
                                />
                            </div>
                            {pickupType === "home" ? (
                                <div className='mb-6'>
                                    <InputField
                                        labelColor='text-black'
                                        label="Pick Up Address"
                                        placeholder="Enter your address"
                                        className='min-h-[108px]'
                                    />
                                    <InputField
                                        labelColor='text-black'
                                        label="City/Town"
                                        placeholder="Enter your city"
                                    />
                                    <InputField
                                        labelColor='text-black'
                                        label="State"
                                        placeholder="Enter your state"
                                    />
                                    <DatePicker
                                        labelColor='text-black'
                                        label="Choose Pick up Date & Time"
                                    />

                                </div>
                            ) : (
                                <div className="flex flex-col gap-3 mb-6">
                                    {locationData.map((item) => (

                                        <Button
                                            key={item.id}
                                            title={item.name}
                                            description={item.address}
                                            variant={pickupLocationId === item.id ? 'tertiary' : 'secondary'}
                                            leftIcon={pickupLocationId === item.id ? <Circle_Selected /> : <Circle_Unselected />}
                                            onClick={() => handlelocation(item.id, item.address)}
                                            fullWidth
                                            className='normal-case items-left justify-left py-[3px] px-1 rounded-[5px] text-[14.71px]'
                                        />
                                    ))}
                                </div>
                            )}
                            <Button
                                title="Next"
                                variant="tertiary"
                                fullWidth
                                onClick={handleNext}
                                className='mt-6'
                            />
                        </div>
                    )}

                    {currentStep === 1 && (
                        <div className="text-black">
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between">
                                    <Text variant='h3' customSize='15px'>Pick Up Address</Text>
                                    <div onClick={handleBack}>
                                        <Text variant='h5' size='xs' className='text-[#979797]'>Change</Text>
                                    </div>
                                </div>
                                <Text variant='small' customSize='11px'>{pickupLocation}</Text>

                            </div>
                            <div className="flex justify-between mb-4">
                                <Text variant='h3' customSize='15px'>Waste Type</Text>
                                <Text variant='h3' customSize='15px'>Add+</Text>
                            </div>
                            <div className="mb-7 flex flex-col gap-2">
                                {cart.map((item, index) => (
                                    <CartCard key={index} itemTitle={item.name} weight={item.weight} income={item.price} date={item.date}
                                    />
                                ))}
                            </div>

                            <Button
                                title="Next"
                                variant="tertiary"
                                fullWidth
                                onClick={() => setIsOpen(true)}
                                className='mt-6'
                            />

                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="text-black">
                            <div className="space-y-2 mb-4">
                                <Text variant='h3' customSize='15px'>Capture Your Waste Items</Text>
                                <Text variant='small' customSize='11px'>To complete your pickup request, please take live photos of [4] waste types as in the pickup summary.</Text>
                            </div>
                            <Text variant='h3' customSize='15px' className='mb-4'>⚠️ Important:</Text>

                            <ul className="list-decimal list-outside space-y-1 p-3">
                                <li className="text-[11px]">
                                    Ensure the images clearly show the waste items for accurate classification.
                                </li>
                                <li className="text-[11px]">
                                    Take one photo per waste type and confirm before moving to the next.
                                </li>
                            </ul>

                            <Text customSize="11px">Thank you for helping us maintain transparency and efficiency in our recycling process!</Text>

                            <div className="p-4 mt-6 space-y-4">
                                <ImageViewer src={"/videos/recycle.mp4"} isAnimation
                                    autoPlay={false}
                                    muted={false} 
                                    className='rounded-lg'/>
                                <CameraComponent />
                            </div>
                            <Button
                                title="Submit Request"
                                variant="tertiary"
                                fullWidth
                                onClick={handleNext}
                                className='mt-6'
                            />
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="text-black flex flex-col justify-center items-center text-center my-auto h-screen bg-white">
                            <FaCheckCircle className='w-16 h-16 text-[#217C70]' />
                            <div className="mt-6 mb-15 flex flex-col gap-5">
                            <Text variant='h3' customSize='15px'>Capture Your Waste Items</Text>
                            <Text variant='small' customSize='11px'>Thank you for scheduling your waste pickup with Energy Chleen! Your request has been successfully submitted.</Text>
                            <Text variant='small' customSize='11px'>Our team is currently reviewing your request to ensure all details are accurate. You’ll receive a notification once your pickup is approved.</Text>
                            </div>
                            <Button
                                title="Back to Home"
                                variant="tertiary"
                                fullWidth
                                onClick={() => router.push(DASHBOARD_ROUTE)}
                                className='mt-6'
                            />
                        </div>
                    )}
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <Text customSize='14.19px' variant='h3' className='mb-4 text-black'>Your Pickup Request is Almost Ready!</Text>
                <Text variant='small' customSize='11px' className='text-black'>Make sorting easier and more efficient with premium items from our Eco Essentials Store. Items include, waste bags, garbage cans, gloves, etc..</Text>

                <div className="flex justify-between mt-7 gap-2">
                    <Button  variant='tertiary' title={"Browse Eco Essentials"} className='capitalize py-[7px] px-[9px] rounded-[4.73px] text-[9.46px] leading-[14.19px] tracking-[0px]' onClick={() => router.push(STORE_ROUTE)} />
                    <Button  variant='tertiary' title={"Continue Without Shopping"} className='capitalize py-[7px] px-[9px] rounded-[4.73px] text-[9.46px] leading-[14.19px] tracking-[0px]' onClick={handlePickUp} />
                </div>
            </Modal>
            <MobileNav />
        </div>
    );
}