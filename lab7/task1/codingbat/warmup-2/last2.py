def last2(str:str):
  patt=str[-2:]
  count=0
  for i in range(len(str)-2):
    if(str[i:i+2]==patt):
       count+=1
  return count

