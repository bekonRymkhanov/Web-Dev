def pos_neg(a, b, negative):
  if(negative):
    if(a<0 and b<0):
      return True
  else:
    if(a<0 and b>0) or (a>0 and b<0):
      return True
  return False