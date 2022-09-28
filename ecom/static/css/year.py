date_1 = [2014, 1, 1]
date_2 = [2016, 1, 20]

total_days_1 = 365 - ((date_1[1]-1)*30 + date_1[2])
total_days_2 = 365 - ((date_2[1]-1)*30 + date_2[2])
ans = (total_days_1 - total_days_2) + ((date_2[0] - date_1[0])*365)
print(ans)