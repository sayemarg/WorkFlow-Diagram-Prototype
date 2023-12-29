const EventBaseForm = () => {
	return (
		<label className="input-group">
			<span className="label">نوع عملیات:</span>

			<select>
				<option>ایجاد</option>
				<option selected>ویرایش</option>
				<option>حذف</option>
			</select>
		</label>
	);
};

export default EventBaseForm;
