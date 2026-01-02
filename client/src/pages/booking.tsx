import { Layout } from "@/components/layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { VILLA, HOTEL_INFO } from "@/lib/constants";
import { format, differenceInDays } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
// import exteriorImg from "@assets/generated_images/beach_villa_resort_exterior.png";
import villaImg from "@assets/generated_images/108A0557.jpg";

const bookingSchema = z.object({
  checkIn: z.date({ required_error: "Check-in date is required" }),
  checkOut: z.date({ required_error: "Check-out date is required" }),
  guests: z.string(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
});

export default function Booking() {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: "2",
    },
  });

  const watchCheckIn = form.watch("checkIn");
  const watchCheckOut = form.watch("checkOut");

  // Calculate total
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);

  useEffect(() => {
    if (watchCheckIn && watchCheckOut) {
      const dayDiff = differenceInDays(watchCheckOut, watchCheckIn);
      const n = dayDiff > 0 ? dayDiff : 0;
      setNights(n);
      setTotalPrice(n * VILLA.price);
    } else {
      setTotalPrice(0);
      setNights(0);
    }
  }, [watchCheckIn, watchCheckOut]);

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Store booking data in session storage to pass to payment page
      sessionStorage.setItem(
        "bookingData",
        JSON.stringify({
          ...values,
          villaName: VILLA.name,
          pricePerNight: VILLA.price,
          totalPrice,
          nights,
          currency: HOTEL_INFO.currency,
        })
      );
      setLocation("/payment");
    }, 1500);
  }

  return (
    <Layout>
      <div className="h-[60vh] relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={villaImg}
            alt="Bay Woods Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white ">
          <h1 className="text-5xl md:text-7xl font-serif">
            Reserve Your Villa
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Secure your dates for an unforgettable stay
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif mb-6">Booking Details</h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="checkIn"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Check-in Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal rounded-none h-12",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="checkOut"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Check-out Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal rounded-none h-12",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < (watchCheckIn || new Date())
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full rounded-none h-12 border border-input bg-background px-3 py-2"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-serif mb-4">Your Details</h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="John Doe"
                                className="rounded-none h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="you@example.com"
                                className="rounded-none h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="+91 9876543210"
                                className="rounded-none h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-foreground rounded-none uppercase tracking-widest"
                      disabled={!watchCheckIn || !watchCheckOut || isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Proceed to Payment"
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      You won't be charged yet. Confirm on the next page.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-lg border-t-4 border-primary sticky top-24">
              <h3 className="text-xl font-serif mb-6 pb-4 border-b border-border">
                Booking Summary
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-lg font-serif font-bold text-foreground mb-1">
                    {VILLA.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {VILLA.bedrooms} BR | {VILLA.bathrooms} BA | Up to{" "}
                    {VILLA.capacity} guests
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check-in</span>
                    <span className="font-medium">
                      {watchCheckIn
                        ? format(watchCheckIn, "MMM dd, yyyy")
                        : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check-out</span>
                    <span className="font-medium">
                      {watchCheckOut
                        ? format(watchCheckOut, "MMM dd, yyyy")
                        : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Nights</span>
                    <span className="font-medium">{nights}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border mt-4">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="text-muted-foreground text-xs">
                        OMR {VILLA.price}/night
                      </span>
                    </div>
                    <span className="text-right font-semibold">
                      OMR {totalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-serif text-lg">Total</span>
                    <div className="text-right">
                      <span className="block text-2xl font-serif font-bold text-primary">
                        {HOTEL_INFO.currency} {totalPrice}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Taxes may apply
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/50 text-xs text-muted-foreground rounded-sm">
                <h4 className="font-bold mb-2 uppercase tracking-wider">
                  Cancellation
                </h4>
                <p>Free cancellation until 48 hours before check-in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
