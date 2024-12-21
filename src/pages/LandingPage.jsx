import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener <br />
        you&rsquo;ll ever need 👇🏻
      </h2>
      <form
        onSubmit={handleShorten}
        action=""
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your URL"
          className="h-full flex-1 py-4 px-4 "
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button type="submit" className="h-full bg-green-500" variant="default">
          Shorten!
        </Button>
      </form>
      <img src="/banner" alt="not added" className="w-full my-11 md:px-11" />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How Does the URL shortener works?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, out system generates a shorter version of
            that URL.This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do i need a Accoutn to use the app ?
          </AccordionTrigger>
          <AccordionContent>
            Sure, you have must be a user to use out shortener tool!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Is there is any addional fetures ?
          </AccordionTrigger>
          <AccordionContent>
            Yes, You can view number of clicks, geolocation data of the clicks
            and device types for each of shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
