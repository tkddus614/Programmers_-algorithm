function solution(id_list, report, k) {
    const uniqueReports = [...new Set(report)];

    const reportCount = new Map();
    const userNotifications = new Map();
    
    id_list.forEach(user => {
      reportCount.set(user, 0);
      userNotifications.set(user, 0);
    });
  
    uniqueReports.forEach(rep => {
      const [reporter, reported] = rep.split(' ');
      reportCount.set(reported, reportCount.get(reported) + 1);
    });
  
    const suspendedUsers = new Set();
  
    reportCount.forEach((count, user) => {
      if (count >= k) {
          suspendedUsers.add(user);
        }
    });

    uniqueReports.forEach((v) => {
      const [reporter, reported] = v.split(' ');
      if (suspendedUsers.has(reported)) {
        userNotifications.set(reporter, userNotifications.get(reporter) + 1)
      }
    })
  
    return id_list.map((v) => userNotifications.get(v))
}