const mockData = {
  flights: [
    {
      id: 'FL1234',
      number: 'FL1234',
      date: '2024-06-15 14:00',
      source: {
        country: 'USA',
        city: 'New York',
        airportName: 'JFK',
        airportCode: 'JFK',
      },
      destination: {
        country: 'UK',
        city: 'London',
        airportName: 'Heathrow',
        airportCode: 'LHR',
      },
      vehicleType: 'Boeing 737',
      crew: {
        flightCrew: [
          {
            id: 'P001',
            name: 'John Doe',
            age: 45,
            gender: 'Male',
            nationality: 'American',
            languages: ['English', 'Spanish'],
            vehicleRestriction: 'Boeing 737',
            allowedRange: 5000,
            seniorityLevel: 'Senior',
          },
          {
            id: 'P002',
            name: 'Jane Roe',
            age: 35,
            gender: 'Female',
            nationality: 'Canadian',
            languages: ['English', 'French'],
            vehicleRestriction: 'Boeing 737',
            allowedRange: 5000,
            seniorityLevel: 'Junior',
          },
        ],
        cabinCrew: [
          {
            id: 'A001',
            name: 'Alice Smith',
            age: 30,
            gender: 'Female',
            nationality: 'British',
            languages: ['English'],
            type: 'Chief',
            vehicleRestrictions: ['Boeing 737'],
          },
          {
            id: 'A002',
            name: 'Bob Brown',
            age: 28,
            gender: 'Male',
            nationality: 'Australian',
            languages: ['English'],
            type: 'Regular',
            vehicleRestrictions: ['Boeing 737', 'Airbus A320'],
          },
        ],
      },
      passengers: [
        {
          id: 'PA001',
          name: 'Charlie Johnson',
          age: 34,
          gender: 'Male',
          nationality: 'American',
          seatType: 'Economy',
          seatNumber: '12A',
        },
        {
          id: 'PA002',
          name: 'Diana Ross',
          age: 29,
          gender: 'Female',
          nationality: 'British',
          seatType: 'Business',
          seatNumber: '1A',
        },
        {
          id: 'PA003',
          name: 'Eve Adams',
          age: 2,
          gender: 'Female',
          nationality: 'Canadian',
          seatType: 'Infant',
          parent: 'PA002',
        },
      ],
    },
    // Additional flight data can be added here
  ],
};

export default mockData;
