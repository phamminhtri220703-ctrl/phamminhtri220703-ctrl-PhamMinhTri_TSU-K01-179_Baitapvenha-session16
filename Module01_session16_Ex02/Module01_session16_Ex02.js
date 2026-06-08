/**
 * Hàm tìm giá trị nhỏ nhất trong mảng
 * @param {Array} array - Mảng số cần tìm min
 * @returns {number|string} - Giá trị nhỏ nhất hoặc thông báo nếu mảng rỗng
 */
function findMin(array) {
    // Kiểm tra nếu mảng rỗng theo yêu cầu logic
    if (array.length === 0) {
        return "Mảng rỗng"; 
    }

    let min = array[0]; // Giả sử phần tử đầu tiên là nhỏ nhất
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]; // Cập nhật giá trị nhỏ nhất mới
        }
    }
    
    return min;
}

// Sử dụng hàm với các mảng từ hình ảnh:
const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];

console.log("Min arr1:", findMin(arr1)); // Kết quả: -3
console.log("Min arr2:", findMin(arr2)); // Kết quả: 6
console.log("Min arr3:", findMin(arr3)); // Kết quả: Mảng rỗng
console.log("Min arr4:", findMin(arr4)); // Kết quả: 0