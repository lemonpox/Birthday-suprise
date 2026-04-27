import { useState, useEffect } from "react"; import { motion } from "framer-motion"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function BirthdayPage(){ const [started,setStarted]=useState(false); const [showConfetti,setShowConfetti]=useState(false);

useEffect(()=>{ if(started){ setTimeout(()=>setShowConfetti(true),800); } },[started]);

// 👉 REPLACE these with real photos const photos=[ "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", "https://images.unsplash.com/photo-1517841905240-472988babdf9", "https://images.unsplash.com/photo-1494790108377-be9c29b29330", "https://images.unsplash.com/photo-1511988617509-a57c8a288659", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7" ];

return ( <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-orange-200 flex items-center justify-center p-6 overflow-hidden"> {!started ? ( <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}}> <Card className="p-10 text-center shadow-2xl rounded-2xl"> <h1 className="text-4xl font-bold mb-4">🎉 A Special Surprise 🎉</h1> <p className="mb-6 text-lg">Someone made this just for you 💝</p> <Button className="text-lg px-8 py-6" onClick={()=>setStarted(true)}> Open Your Gift 🎁 </Button> </Card> </motion.div> ):( <div className="max-w-5xl w-full space-y-10">

{showConfetti && (
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="absolute inset-0 pointer-events-none text-6xl text-center"
        >
          🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊
        </motion.div>
      )}

      <motion.h1
        initial={{y:-40,opacity:0}}
        animate={{y:0,opacity:1}}
        className="text-5xl md:text-6xl font-extrabold text-center"
      >
        Happy Birthday Shruti ❤️
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4}}
        className="text-center text-xl md:text-2xl"
      >
        Today is YOUR day 🌸✨
        <br/>And you deserve the most special surprise ever 💫
      </motion.p>

      {/* Photo Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src,i)=> (
          <motion.img
            key={i}
            src={src}
            className="rounded-2xl shadow-xl object-cover h-56 md:h-72 w-full"
            initial={{opacity:0,scale:0.8}}
            animate={{opacity:1,scale:1}}
            transition={{delay:i*0.15}}
          />
        ))}
      </div>

      {/* Love Message */}
      <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.8}}
      >
        <Card className="p-8 text-center shadow-2xl">
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">A Little Message 💌</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              You are one of the most amazing people in my life.
              <br/><br/>
              Thank you for all the laughs, memories and happiness you bring.
              I hope this year gives you endless smiles, success and love 💖
              <br/><br/>
              Never stop being the wonderful person you are 🌟
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Final Wish */}
      <motion.h2
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2}}
        className="text-center text-3xl md:text-4xl font-bold pb-10"
      >
        With lots of love ❤️
      </motion.h2>

    </div>
  )}
</div>

); }
