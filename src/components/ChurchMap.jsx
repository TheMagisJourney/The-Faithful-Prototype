import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle, MapPin, Church, Calendar, Clock, Users, ChevronLeft, ChevronRight, Book } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const MapPlaceholder = () => (
  <svg 
    viewBox="0 0 800 400" 
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="800" height="400" fill="#e5e7eb" />
    
    {Array.from({ length: 8 }).map((_, i) => (
      <line 
        key={`v${i}`} 
        x1={i * 100} 
        y1="0" 
        x2={i * 100} 
        y2="400" 
        stroke="#d1d5db" 
        strokeWidth="1"
      />
    ))}
    {Array.from({ length: 4 }).map((_, i) => (
      <line 
        key={`h${i}`} 
        x1="0" 
        y1={i * 100} 
        x2="800" 
        y2={i * 100} 
        stroke="#d1d5db" 
        strokeWidth="1"
      />
    ))}
    
    <g transform="translate(300,150)">
      <circle cx="0" cy="0" r="8" fill="#ef4444" />
      <circle cx="0" cy="0" r="3" fill="white" />
      <text x="15" y="5" fontSize="12" fill="#374151">St. Mary's Cathedral</text>
    </g>
    <g transform="translate(450,200)">
      <circle cx="0" cy="0" r="8" fill="#ef4444" />
      <circle cx="0" cy="0" r="3" fill="white" />
      <text x="15" y="5" fontSize="12" fill="#374151">Sacred Heart Church</text>
    </g>
    <g transform="translate(250,250)">
      <circle cx="0" cy="0" r="8" fill="#ef4444" />
      <circle cx="0" cy="0" r="3" fill="white" />
      <text x="15" y="5" fontSize="12" fill="#374151">St. Joseph's Parish</text>
    </g>

    <g transform="translate(375,175)">
      <circle cx="0" cy="0" r="12" fill="#3b82f6" fillOpacity="0.2" />
      <circle cx="0" cy="0" r="6" fill="#3b82f6" />
      <text x="15" y="5" fontSize="12" fill="#374151">Your Location</text>
    </g>

    <circle
      cx="375"
      cy="175"
      r="50"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="1"
      strokeDasharray="4 2"
      opacity="0.3"
    />
    <circle
      cx="375"
      cy="175"
      r="100"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="1"
      strokeDasharray="4 2"
      opacity="0.2"
    />
  </svg>
);

const ChurchMap = () => {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events] = useState([
    {
      id: 1,
      title: "Daily Mass",
      church: "St. Mary's Cathedral",
      date: "Today",
      time: "8:00 AM",
      type: "Mass",
      celebrant: "Fr. John Smith",
      attendance: "Open to all"
    },
    {
      id: 2,
      title: "Evening Adoration",
      church: "Sacred Heart Church",
      date: "Today",
      time: "7:00 PM",
      type: "Adoration",
      celebrant: "Fr. Michael Davis",
      attendance: "Open to all"
    },
    {
      id: 3,
      title: "Sunday Mass",
      church: "St. Joseph's Parish",
      date: "Tomorrow",
      time: "10:30 AM",
      type: "Mass",
      celebrant: "Fr. James Wilson",
      attendance: "All welcome"
    }
  ]);

  const faithCategories = [
    { title: 'Bible Studies', image: '/api/placeholder/120/120' },
    { title: 'Eucharistic Adoration', image: '/api/placeholder/120/120' },
    { title: 'OCIA', image: '/api/placeholder/120/120' },
    { title: 'Mass', image: '/api/placeholder/120/120' },
    { title: 'Confession', image: '/api/placeholder/120/120' },
    { title: 'Service', image: '/api/placeholder/120/120' }
  ];

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      setError("Please enter a location");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
    } catch (err) {
      setError("Failed to search location. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 p-4">
      {/* Splash Image Section */}
      <section className="relative w-full h-screen mb-16">
        <div className="absolute inset-0 bg-black">
          <img
            src="/api/placeholder/1920/1080"
            alt="Christ Calling the Apostles"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center p-20 text-white">
          <h1 className="text-7xl font-playfair mb-6 tracking-wider font-semibold">THE FAITHFUL</h1>
          <p className="text-2xl tracking-[0.2em] font-light">A CATHOLIC COMMUNITY GUIDE</p>
        </div>
      </section>

      {/* The Catholic Faith Section */}
      <section className="w-full mb-12">
        <h2 className="text-3xl text-center mb-8 font-playfair">The Catholic Faith</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 max-w-3xl mx-auto">
          {faithCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <Button 
                variant="ghost" 
                className="p-0 h-auto hover:bg-gray-100 transition-colors"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
              </Button>
              <span className="mt-2 text-sm text-center font-medium">{category.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Church Search Section */}
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Church className="w-6 h-6" />
            Gatherings of the faithful near me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-2 mb-4 max-w-xl mx-auto">
            <Input
              placeholder="Enter your location..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSearch} disabled={loading}>
              <MapPin className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            <div className="w-full">
              <div className="w-full h-96 bg-gray-100 rounded-lg">
                <MapPlaceholder />
              </div>
              <div className="mt-2 text-sm text-gray-500 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span>Church Location</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span>Your Location</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Upcoming Events</h3>
              <div className="grid gap-4">
                {events.map(event => (
                  <Card key={event.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">{event.title}</h4>
                        <p className="text-gray-600">{event.church}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {event.attendance}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Celebrant: {event.celebrant}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChurchMap;