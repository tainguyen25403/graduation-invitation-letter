"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Playfair_Display } from "next/font/google";
import { Yeseva_One } from "next/font/google";
import { Raleway } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yeseva",
});

export default function Home() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [showSticker, setShowSticker] = useState(false);
  const [selectedGif, setSelectedGif] = useState("");

  // Placeholder GIF arrays - you can replace these URLs later
  const yesGifs = [
    "https://media1.tenor.com/m/8d0QHl_0C_4AAAAd/%D8%A7%D8%A8%D9%8A-%D8%A8%D8%A7%D8%B1%D8%B1%D8%B1%D9%8A%D8%B3.gif",
    "https://media.tenor.com/e9gAN0zG7g8AAAAi/quby-hyper.gif",
    "https://media.tenor.com/bz8-voqm_B0AAAAj/tkthao219-quby.gif",
    "https://media.tenor.com/4RUGk3JSmVwAAAAj/quby-quby-sticker.gif",
    "https://media1.tenor.com/m/kcqm_X5eYjoAAAAd/quby.gif",
    "https://media.tenor.com/EG5QEn5jqEwAAAAj/quby-cute.gif",
    "https://media1.tenor.com/m/WZ3esvh1VjkAAAAd/quby.gif",
    "https://media.tenor.com/blS-FoXeSn0AAAAj/itelquby-itel.gif",
  ];

  const noGifs = [
    "https://media.tenor.com/_cIlj5XEy8QAAAAj/quby.gif",
    "https://media.tenor.com/gMstTX8Ms_UAAAAj/quby.gif",
    "https://media.tenor.com/DVPv2JXcWJAAAAAj/quby-fight.gif",
    "https://media.tenor.com/O0uV2bTD6EkAAAAj/tkthao219-quby.gif",
    "https://media.tenor.com/TTpNKFzPejEAAAAj/quby-slap.gif",
    "https://media.tenor.com/3RkBSAwE4xgAAAAj/quby-pentol.gif",
    "https://media.tenor.com/xGo8QdmLBAwAAAAj/tkthao219-quby.gif",
    "https://media.tenor.com/EIcDxdXmjEYAAAAj/quby-knife.gif",
  ];

  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-[#fdfbf7] to-[#f7f9fc] p-4 md:p-8 ${playfair.variable}`}
    >
      <Card className="max-w-3xl mx-auto p-0 md:p-0 bg-[#F6F6E9] backdrop-blur border-0 shadow-lg rounded-2xl overflow-hidden">
        <div className="relative">
          {/* Watercolor leaves decoration - top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-[url('/leaves-top.svg')] bg-contain bg-no-repeat bg-top background-" />
          <div className="absolute top-0 bottom-0 right-0 w-13 md:w-25 bg-[url('/leaves-right.svg')] bg-contain bg-no-repeat bg-right" />
          <div className="absolute top-0 bottom-0 left-0 w-13 md:w-25 bg-[url('/leaves-left.svg')] bg-contain bg-no-repeat bg-left" />
          {/* Add a spacer to push content below the image if needed */}

          <div className="pt-12 pb-2 md:pt-24 md:pb-16">
            <div className="text-center md:space-y-4">
              <h2
                className={`${yeseva.className} text-[#697b7f] text-xs md:text-2xl tracking-[0.2em]`}
              >
                SAVE THE DATE
              </h2>
              <p
                className={`${raleway.className} font-medium text-[#697b7f] text-sm md:text-3xl tracking-wider`}
              >
                FOR THE GRADUATION OF
              </p>
              <h1
                className={`${yeseva.className} text-[#3f618f] text-2xl md:text-5xl font-bold  tracking-wide`}
              >
                NGUYEN THANH TAI
              </h1>
            </div>

            <div
              className={`${raleway.className} font-bold flex items-center justify-center gap-3 md:gap-8 text-[#697b7f] pt-3 pb-2 md:p-5`}
            >
              <p className="text-xs md:text-2xl text-right">
                10:00
                <br />
                A.M
              </p>
              <div className="bg-[#3f618f] text-white rounded-full p-6 w-10 h-10 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <span className="text-xs md:text-xl">SUN</span>
                <span className="text-base md:text-4xl font-bold">08</span>
              </div>
              <p className="text-xs md:text-2xl">
                JUNE <br />
                2025
              </p>
            </div>

            <div className="text-center">
              <h3
                className={`${yeseva.className} text-[#3f618f] text-base md:text-3xl font-playfair tracking-wider`}
              >
                UIT
              </h3>
              <p
                className={`${raleway.className} font-semibold text-[#697b7f] text-sm md:text-lg leading-relaxed tracking-wide`}
              >
                QUARTER 6, LINH TRUNG WARD,
                <br />
                THU DUC CITY, HO CHI MINH CITY
              </p>
              <p className="text-[#697b7f] text-sm md:text-base">
                Call me: 0777 412 175
              </p>
            </div>

            <div
              className={`${raleway.className} max-w-md px-14 mx-auto space-y-3 md:space-y-6 pt-3 pb-3 md:pt-8`}
            >
              <div className="space-y-3 md:space-y-3 bg-[#F6F6E9] p-3 md:p-6 rounded-xl border border-[#3f618f]/30 relative h-[450px]">
                {showSticker ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F6F6E9] rounded-xl">
                    <div className="text-center space-y-4">
                      <img
                        src={selectedGif}
                        alt="Thank you"
                        className="w-48 h-48 object-contain mx-auto"
                      />
                      <p
                        className={`${raleway.className} text-[#3f618f] font-bold text-xl`}
                      >
                        Thank you for your RSVP!
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-1">
                      <Label className="text-[#3f618f] font-bold tracking-wide text-center text-base md:text-xl block">
                        YOUR NAME
                      </Label>
                      <Input
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-[#3f618f]/20 focus:border-[#3f618f] focus:ring-[#3f618f] transition-colors text-lg md:text-xl"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="text-[#3f618f] font-bold tracking-wide text-center text-base md:text-xl block">
                        CAN YOU JOIN?
                      </Label>
                      <div className="space-y-2">
                        {/* Option YES */}
                        <button
                          type="button"
                          onClick={() => setAttendance("yes")}
                          className={`w-full px-4 py-2 rounded-lg text-sm md:text-lg border border-[#3f618f]/30 text-gray-600${
                            attendance === "yes"
                              ? "border-[#3f618f] text-[#3f618f] font-semibold shadow-sm"
                              : "border-[#3f618f]/30 text-gray-600"
                          } transition-all duration-200`}
                        >
                          YES, DEFINITELY!
                        </button>

                        {/* Option NO */}
                        <button
                          type="button"
                          onClick={() => setAttendance("no")}
                          className={`w-full px-4 py-2 rounded-lg  text-sm md:text-lg border border-[#3f618f]/30 text-gray-600${
                            attendance === "no"
                              ? "border-[#3f618f] text-[#3f618f] font-semibold shadow-sm"
                              : "border-[#3f618f]/30 text-gray-600"
                          } transition-all duration-200`}
                        >
                          SO SAD I CAN&apos;T MAKE IT!
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[#3f618f] font-bold tracking-wide text-center text-base md:text-xl block">
                        MESSAGE (OPTIONAL)
                      </Label>
                      <Textarea
                        placeholder="Write your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-[100px] border-[#3f618f]/20 focus:border-[#3f618f] focus:ring-[#3f618f] transition-colors text-lg md:text-xl"
                      />
                    </div>

                    <Button
                      className="w-full bg-[#3f618f] hover:bg-[#1d3a6e] text-white font-medium tracking-wider shadow-md transform hover:translate-y-[-2px] transition-all duration-200"
                      onClick={async () => {
                        if (!name) {
                          alert("Please enter your name");
                          return;
                        }
                        if (!attendance) {
                          alert("Please select if you can join");
                          return;
                        }

                        const webhookUrl =
                          "https://discord.com/api/webhooks/1378671844839919676/IfVm18sbuh241ApdrHWBjbviN8mzgkh8_qxz6gkkd16dRm7uYRGfdsfpMZpaCMFjEdkN";
                        const content = `🎓 New RSVP Received!\n\n👤 Name: ${name}\n✅ Attendance: ${attendance}\n💭 Message: ${
                          message || "No message"
                        }`;

                        try {
                          const response = await fetch(webhookUrl, {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ content }),
                          });

                          if (response.ok) {
                            // Select random gif based on attendance
                            const gifs =
                              attendance === "yes" ? yesGifs : noGifs;
                            const randomIndex = Math.floor(
                              Math.random() * gifs.length
                            );
                            setSelectedGif(gifs[randomIndex]);

                            setShowSticker(true);
                            setName("");
                            setAttendance("");
                            setMessage("");
                          } else {
                            alert("Failed to send RSVP. Please try again.");
                          }
                        } catch {
                          alert("Error sending RSVP. Please try again.");
                        }
                      }}
                    >
                      SEND
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="h-5" />
          {/* Watercolor leaves decoration - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/leaves-bottom.svg')] bg-contain bg-no-repeat bg-bottom" />
        </div>
      </Card>
    </main>
  );
}
