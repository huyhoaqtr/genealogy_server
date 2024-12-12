function filterData(response) {
    const { data } = response;
  
    // Tạo danh sách tất cả `_id` xuất hiện trong trường `couple`
    const coupleIds = new Set();
    data.forEach(person => {
      person.couple.forEach(couplePerson => coupleIds.add(couplePerson._id));
    });
  
    // Lọc bỏ những người có `_id` nằm trong `coupleIds`
    const filteredData = data.filter(person => !coupleIds.has(person._id));
  
    // Trả về response mới với dữ liệu đã lọc
    return {
      ...response,
      data: filteredData,
    };
  }
  
  // Dữ liệu đầu vào
  const response = {
    statusCode: 200,
    message: "Lấy dữ liệu cây gia tộc thành công",
    data: [
      {
        _id: "6750beb981bf0e3047093b72",
        fullName: "Thủy To 1",
        avatar: "uploads/1733344953336.jpg",
        address: "Tỉnh Lai Châu, Huyện Than Uyên, Xã Hua Nà",
        gender: "MALE",
        dateOfBirth: "2015-12-22T17:00:00.000Z",
        dateOfDeath: "2015-12-23T17:00:00.000Z",
        description: "ddđ",
        phoneNumber: "0987654321",
        positionX: 0,
        positionY: 0,
        title: "Thủy Hoàng De",
        couple: [
          {
            _id: "6750c321c9b6c662fe53463f",
            fullName: "vo thuy to 1",
            avatar: "uploads/1733346081688.webp",
            address: "6750beb981bf0e3047093b72",
            gender: "MALE",
            dateOfBirth: "2024-12-04T00:00:00.000Z",
            dateOfDeath: "2024-12-04T00:00:00.000Z",
            description: "string",
            phoneNumber: "string",
            positionX: 0,
            positionY: 0,
            title: "string",
            tribe: "6750bad4e9411816e616e495",
            createdAt: "2024-12-04T21:01:21.707Z",
            updatedAt: "2024-12-04T21:01:21.715Z",
            __v: 0,
            level: 1,
          },
        ],
        tribe: "6750bad4e9411816e616e495",
        createdAt: "2024-12-04T20:42:33.367Z",
        updatedAt: "2024-12-04T21:01:21.711Z",
        __v: 0,
        level: 1,
      },
      {
        _id: "6750c15629e088920d40542b",
        fullName: "hehehe",
        avatar: "uploads/1733345622004.webp",
        address: "6750beb981bf0e3047093b72",
        gender: "MALE",
        dateOfBirth: "2024-12-04T00:00:00.000Z",
        dateOfDeath: "2024-12-04T00:00:00.000Z",
        description: "string",
        phoneNumber: "string",
        positionX: 0,
        positionY: 0,
        title: "string",
        parent: "6750beb981bf0e3047093b72",
        couple: [],
        tribe: "6750bad4e9411816e616e495",
        createdAt: "2024-12-04T20:53:42.016Z",
        updatedAt: "2024-12-04T20:53:42.030Z",
        __v: 0,
        level: 2,
      },
      {
        _id: "6750c321c9b6c662fe53463f",
        fullName: "vo thuy to 1",
        avatar: "uploads/1733346081688.webp",
        address: "6750beb981bf0e3047093b72",
        gender: "MALE",
        dateOfBirth: "2024-12-04T00:00:00.000Z",
        dateOfDeath: "2024-12-04T00:00:00.000Z",
        description: "string",
        phoneNumber: "string",
        positionX: 0,
        positionY: 0,
        title: "string",
        couple: [
          {
            _id: "6750beb981bf0e3047093b72",
            fullName: "Thủy To 1",
            avatar: "uploads/1733344953336.jpg",
            address: "Tỉnh Lai Châu, Huyện Than Uyên, Xã Hua Nà",
            gender: "MALE",
            dateOfBirth: "2015-12-22T17:00:00.000Z",
            dateOfDeath: "2015-12-23T17:00:00.000Z",
            description: "ddđ",
            phoneNumber: "0987654321",
            positionX: 0,
            positionY: 0,
            title: "Thủy Hoàng De",
            tribe: "6750bad4e9411816e616e495",
            createdAt: "2024-12-04T20:42:33.367Z",
            updatedAt: "2024-12-04T21:01:21.711Z",
            __v: 0,
            level: 1,
          },
        ],
        tribe: "6750bad4e9411816e616e495",
        createdAt: "2024-12-04T21:01:21.707Z",
        updatedAt: "2024-12-04T21:01:21.715Z",
        __v: 0,
        level: 1,
      },
    ],
  };
  
  // Kết quả sau khi lọc
  const filteredResponse = filterData(response);
  console.log(filteredResponse);
  