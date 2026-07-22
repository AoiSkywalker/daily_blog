int sum_of_odd_square_1(int n) 
{
    long long sum = 0;
    for (int i = 1; i <= (n/2); i++) 
        sum += (long long) (2 * i - 1) * (2 * i - 1);
    return sum;
}