"use client";

import React, { useState } from 'react';
import IconStepper from '@/components/stepper/iconStepper';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import InputField from '@/components/inputField';
import { IoHomeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import DatePicker from '@/components/datePicker';
import { Circle_Selected, Circle_Unselected } from '@/assets';
import { data } from '@/data/pickupStations';
import Text from '@/components/Text';
import ContentContainer from '@/components/container';
import { cartdata } from '@/data/cart';
import CartCard from '@/components/cards/cartCard';

export default function PickupDetails() {
    const [currentStep, setCurrentStep] = useState(0);
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
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        }
        if (currentStep === 1) {
            
        }
    };

    const handlelocation = (id: string, item: string) => {
        setPickupLocationId(id)
        setPickupLocation(item)
    }

    return (
        <div className="relative p-4 bg-[url('/images/background.png')] bg-contain bg-center min-h-screen">

            <div className="absolute inset-0 bg-white bg-opacity-80"></div>

            <div className="relative z-10">
                <IconStepper
                    currentStep={currentStep}
                    onBack={handleBack}
                />

                <div className="mt-4">

                    {currentStep === 0 && (
                        <div>
                            <div className="flex gap-4 mb-4">
                                <Button
                                    title="Home Pick Up"
                                    variant={pickupType === 'home' ? 'tertiary' : 'secondary'}
                                    leftIcon={pickupType === 'home' ? <Circle_Selected /> : <Circle_Unselected />}
                                    onClick={() => setPickupType('home')}
                                    fullWidth
                                    className='capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px]'
                                />
                                <Button
                                    title="Pick Up Station"
                                    variant={pickupType === 'station' ? 'tertiary' : 'secondary'}
                                    leftIcon={pickupType === 'station' ? <Circle_Selected /> : <Circle_Unselected />}
                                    onClick={() => setPickupType('station')}
                                    fullWidth
                                    className='capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px]'
                                />
                            </div>
                            {pickupType === "home" ? (
                                <div className='mb-6'>
                                    <InputField
                                        labelColor='text-black'
                                        label="Pick Up Address"
                                        placeholder="Enter your address"
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
                                onClick={handleNext}
                                className='mt-6'
                            />

                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="space-y-4"></div>
                    )}
                </div>
            </div>
        </div>
    );
}