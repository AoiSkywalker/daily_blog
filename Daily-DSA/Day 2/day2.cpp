/**
 *  Two Sum
 */

#include <vector>
#include <unordered_map>

class Day2 {
    public:
        std::vector<int> twoSum(std::vector<int> &numbers, int target) {
            std::unordered_map<int, int> m;
            std::vector<int> result;

            for (int i = 0; i < numbers.size(); i++) {
                if (m.find(numbers[i]) == m.end()) 
                    m[target - numbers[i]] = i;
                else {
                    result.push_back(m[numbers[i]]);
                    result.push_back(i);
                    break;
                }
            }
            return result;
        }
};