def ans():
    flagment = 999
    target = 0
    for i in range(flagment, 100, -1):
        target = int(str(i) + str(i)[::-1])
        for j in range(100, flagment + 1):
            # pythonにおいて、除算を'/'で行うと戻り値が浮動小数になるので注意
            if (target % j) == 0 and len(str(target // j)) == 3:
                return target

    return "not Matched"

print(ans())
