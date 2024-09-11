'use client';
import React,{useState,ChangeEvent} from 'react'
import {Card, CardTitle,CardContent,CardHeader,CardFooter, CardDescription} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState<number|null>(null);
    const [tipPercentage, setTipPercentage] = useState<number|null>(null);
    const [tipAmount, setTipAmount] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const handleBillAmountChange = (e:ChangeEvent<HTMLInputElement>):void=>{
        setBillAmount(parseFloat(e.target.value))
    }

const handleTipPercentageChange = (e:ChangeEvent<HTMLInputElement>):void =>{
    setTipPercentage(parseFloat(e.target.value))
}

const calculateTip = ():void=>{
    if(billAmount!==null && tipPercentage!==null){
        const tip = billAmount * (tipPercentage/100);
        setTipAmount(tip);
        setTotalAmount(billAmount + tip);
    }
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 dark:bg-yellow400">
      <Card className="w-full max-w-md p-6 bg-yellow-50 shadow-lg rounded-lg">
        <CardHeader>
            <CardTitle className="text-center text-[40px]">Tip Calculator</CardTitle>
            <CardDescription className="text-center text-[20px]">Enter the bill amount and tip percentage to calculate the tip and total.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <Label htmlFor="bill-amount">Bill Amount</Label>
            <Input id="bill-amount"
            type="number"
            value={billAmount !==null ? billAmount:""}
            onChange={handleBillAmountChange}
            placeholder='Enter bill amount'
            />
           <div> 
            <Label htmlFor="tip-percentage">Tip Percentage</Label>
            <Input id="tip-percentage"
            type="number"
            value={tipPercentage !==null ? tipPercentage:""}
            onChange={handleTipPercentageChange}
            placeholder='Enter tip percentage'
            />
           </div>
           <Button onClick={calculateTip} className=' flex mx-auto'>calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-2">
          <div className="flex items-center justify-between" >
            <span className="font-bold">Tip Amount :</span>
            <span className="font-bold">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between" >
            <span className="font-bold ">Total Amount :</span>
            <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </div>

  )
}

export default TipCalculator
