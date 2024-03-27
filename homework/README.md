## Problem 1: Missing Number

ให้ array nums มีจำนวน n ตัวที่แตกต่างกันทั้งหมดในช่วง [0, n] ให้ return ค่าที่หายไป 1 ตัวที่อยู่ในช่วง [0, n]

Challenge: O(n) time complexity with O(1) space.

### Example Testcases

```js
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

```js
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

```js
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

### Code

```js
function missingNumber(nums) {
  // TODO: Implements
}
```

### Constraints

- n == nums.length
- 1 <= n <= 10^4
- 0 <= nums[i] <= n
- All the numbers of nums are unique.

## Problem 2: Sum of Unique Elements

กำหนดให้ array “nums” เป็น array of integer; ให้ return ค่า sum ทั้งหมดของ unique elements (ค่าที่ปรากฏขึ่นใน array เพียงแค่ครั้งเดียว)

### Example Testcases

```js
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
```

```js
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
```

```js
Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
```

### Code

```js
function sumOfUnique(nums) {
  // TODO: Implement
}
```

### Constraints

1 <= nums.length <= 100
1 <= nums[i] <= 100

## Problem 3: Jump Game

ให้ integer array “nums” ในตอนแรกสุดกำหนดให้คุณอยู่ตำแหน่งแรกสุดของ array, ในแต่ละ element ของ array จะแทนค่าระยะทางที่กระโดดได้ไกลที่สุดใน position นั้น (maximum jump length)

Return true ถ้าหากว่าคุณสามารถกระโดดไป index สุดท้ายได้

### Example Testcases

```js
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

```js
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

### Code

```js
function canJump(nums) {
  // TODO: Implement
}
```

### Constraints

- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 10^5

## Problem 4: Calculate Min Group

ในบริษัทแห่งหนึ่ง มีพนักงานทั้งหมดอยู่ N คน แต่ละคนอาจจะมีหัวหน้าของตนเพียง 1 คน หรืออาจจะไม่มีก็ได้ ในบริษัทนี้จะมีการแบ่งระดับตำแหน่งของพนักงานโดยเราจะถือว่า A มีตำแหน่งของงานสูงกว่า B ก็ต่อเมื่อมีหนึ่งในเงื่อนไขต่อไปนี้ถูกต้อง

- A เป็นหัวหน้าของ B
- A มีตำแหน่งของงานสูงกว่า C ซึ่ง C เป็นหัวหน้าของ B

ในวันสิ้นปีทางบริษัทได้จัดงานเลี้ยงฉลองเพื่อขอบคุณพนักงานทุกคนที่ได้ตั้งใจทำงานมาโดยตลอดทั้งปี แต่เนื่องด้วยว่าบริษัทนี้ค่อนข้างที่จะให้ความสำคัญต่อระดับตำแหน่งของงานมาก จึงเกรงว่าหากให้พนักงานทุกคนอยู่รวมกันงานเลี้ยงอาจจะไม่สนุก เพราะอาจจะมีความเกรงใจกันสำหรับพนักงานที่อยู่คนละระดับตำแหน่งกัน จึงตัดสินใจที่จะแบ่งกลุ่มให้พนักงาน โดยในแต่ละกลุ่มนั้นจะต้องไม่มีคนใดที่มีตำแหน่งของงานสูงกว่าคนใดเลย

แต่ถ้าหากว่าจำนวนกลุ่มมีมากเกินไป จะมีค่าใช้จ่ายในการจัดงานก็จะสูง พวกเขาจึงต้องการที่จะแบ่งกลุ่มให้มีจำนวนกลุ่มน้อยที่สุด จงหาว่าพวกเขาจะแบ่งกลุ่มให้มีจำนวนกลุ่มน้อยที่สุดได้ทั้งหมดกี่กลุ่ม

### Code

```js
function calculateMinGroup(n, levels) {
  // TODO: Implement
}
```

ประกอบด้วยจำนวนเต็มบวก n (1 <= n <= 100,000) แทนจำนวนพนักงานในบริษัท และ Array ที่ชื่อว่า levels ซึ่งจะมี Element เป็น Array ที่มี 2 ตัวคือ [u, v] ซึ่งหมายถึงพนักงานหมายเลข u เป็นหัวหน้าของพนักงานหมายเลข v

เพิ่มเติม: ทั้งนี้เราขอรับรองว่า จะไม่มีการเกิดความขัดแย้งของลำดับชั้นขึ้นใน Input (ยกตัวอย่างเช่น สมมติให้มีพนักงาน 3 คน A B และ C แล้ว A เป็นหัวหน้าของ B, B เป็นหัวหน้าของ C และ C เป็นหัวหน้าของ A เราจะพบว่า เมื่อ A เป็นหัวหน้าของ B แล้ว B เป็นหัวหน้าของ C, A จะต้องมีตำแหน่งของงานสูงกว่า C ซึ่งจะขัดแย้งกับการที่บอกว่า C เป็นหัวหน้าของ A)

### Example Testcases

Return ค่าจำนวนเต็มบวกหนึ่งตัวแสดงจำนวนกลุ่มที่น้อยที่สุดที่สามารถแบ่งได้

```js
calculateMinGroup(5, [
  [1, 2],
  [2, 3],
  [1, 4],
]); // Return 3
```

จาก Example Case วิธีหนึ่งที่สามารถแบ่งกลุ่มพนักงานให้น้อยที่สุดได้เป็นดังนี้ กลุ่มที่ 1 มีพนักงานหมายเลข 1, กลุ่มที่ 2 มีพนักงานหมายเลข 2 และ 4, และ กลุ่มที่ 3 มีพนักงานหมายเลข 3 และ 5
